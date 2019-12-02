import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Shared/Spinner";
import Error from "../Shared/Error";
import Table from "./Table";
import * as usersActions from "../../actions/users.actions";
class Users extends Component {
  async componentDidMount() {
    if(!this.props.users.length){
      this.props.getUsers();
    }
  }

  setContent = () => {
    console.log(this.props)
    if (this.props.loading) {
      return <Spinner />;
    } 
    if (this.props.error) {
      return <Error msg={this.props.error}/>
    }
    return (<Table />);
  };


  render() {
    return <div>
      <h1>Users</h1>
      {this.setContent()}</div>;
  }
}
const mapStateToProps = reducers => reducers.usersReducer;
export default connect(mapStateToProps, usersActions)(Users);
