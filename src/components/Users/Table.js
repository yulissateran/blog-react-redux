import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Table = props => {
  const setRows = () =>
   props.users.map((user, key )=> (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
            <Link to={ `publications/${key}`}>
            <div className="eye-solid icon"></div>
            </Link>
        </td>
      </tr>
    ));
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre </th>
          <th>Correo</th>
          <th>Enlace</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{setRows()}</tbody>
    </table>
  );
};
const mapStateToProps = reducers => reducers.usersReducer;
export default connect(mapStateToProps)(Table);
