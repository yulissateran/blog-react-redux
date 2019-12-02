import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Shared/Spinner";
import Error from "../Shared/Error";
import * as usersActions from "../../actions/users.actions";
import * as publicationsActions from "../../actions/publications.actions";
const { getPublicationsOfUser } = publicationsActions;

class Publications extends Component {
  key = this.props.match.params.key;
  async componentDidMount() {
    const {
      getUsers,
      getPublicationsOfUser,
      match: {
        params: { key }
      }
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await getUsers();
    }
    if (this.props.usersReducer.error) return;
    if (!("publicationsId" in this.props.usersReducer.users[key])) {
      getPublicationsOfUser(key);
    }
  }
  render() {
    console.log(this.props);
    return (
        <div className="content-center">
            {this.setUser()}
            {this.setPublications()}
        </div>
    )
  }
  setUser = () => {
    const {
      usersReducer,
      match: {
        params: { key }
      }
    } = this.props;
    if (usersReducer.error) {
        return <Error msg={usersReducer.error} />;
      }
    if (!usersReducer.users.length || usersReducer.loading) {
      return <Spinner />;
    }
    const { name } = usersReducer.users[key];
    return (
      <div>
        {this.key}
        <h1>Publicaciones de: {name}</h1>
      </div>
    );
  };

  setPublications = () => {
    const {
      usersReducer,
      usersReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: {
        params: { key }
      }
    } = this.props;
    if (publicationsReducer.error)
      return <Error msg={publicationsReducer.error} />;
    if (
      !users.length ||
      usersReducer.error ||
      !publications.length )
      return;
    if(!('publicationsId' in users[key])) return;
    if (publicationsReducer.loading) return <Spinner />;

    const { publicationsId } = users[key];
    return publications[publicationsId].map(publication => (
      <div className="publication" key={publication.id}
      onClick={()=>getComments(publication.id)}
      >
        <h2 className="publication__title">{publication.title}</h2>
        <p className="publication__body">{publication.body}</p>
      </div>
    ));
  };
}
const getComments =(id)=>{alert('hola' + id)}
const mapStateToProps = ({ usersReducer, publicationsReducer }) => ({
  usersReducer,
  publicationsReducer
});
const mapDispatchToProps = {
  ...usersActions,
  getPublicationsOfUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
