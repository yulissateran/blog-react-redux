import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="Menu">
    <Link to="/" className="Menu__link">Users</Link>
    <Link to="/tasks" className="Menu__link">Tasks</Link>
  </nav>
);
export default  Menu;
