import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Layout;
