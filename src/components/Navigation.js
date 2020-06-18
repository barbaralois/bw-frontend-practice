import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <h1>App Title Here</h1>
      <div className="links">
        <NavLink className="nav-link" exact to="/business-list">
          Business List
        </NavLink>
        <NavLink exact className="nav-link" to="/">
          Dashboard
        </NavLink>
      </div>
    </div>
  );
}
