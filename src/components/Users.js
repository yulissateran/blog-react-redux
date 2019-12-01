import React, { Component } from 'react';
import axios from 'axios';
// import  './index.css';
class  Users extends Component {

  constructor(){
    super();
    this.state = {
      users: []
    }
  }
   setRows = () => (
     this.state.users.map(user=>(
      <tr key = { user.id }>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
    </tr>
     )
    )
  );

  render (){
    console.log(this.state.users);
    
    return (
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre </th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
        <tbody>
          {this.setRows()}
        </tbody>
        </table>
   
    );
  }
  async componentDidMount() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('users', data);
    this.setState({ users:  data });
  }

}

export default Users;
