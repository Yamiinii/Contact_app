import React from 'react';
import { NavLink } from 'react-router-dom'; // Import the 'NavLink' component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">CONTACTS</NavLink> {/* Use NavLink for the logo */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Create</NavLink> {/* Use NavLink for navigation */}
            </li>
            <li className="nav-item">
              <NavLink to="/all" className="nav-link">View</NavLink> {/* Use NavLink for navigation */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
