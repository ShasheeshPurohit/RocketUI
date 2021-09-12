import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="brand">
          <i className="fas fa-rocket brand-logo"></i>
          <p>Rocket-UI</p>
        </div>
        <p className="nav-icon">
          <i className="fab fa-github"></i>
        </p>
      </nav>
    </div>
  );
}
