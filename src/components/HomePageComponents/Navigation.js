import React from "react";
import "./Navigation.css";

const NavigationComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3">
      <a className="navbar-brand ms-5" href="/">
        <img className="nav-logo" src="/navlogo.png" alt="Logo" />
        File Management System
      </a>
    </nav>
  );
};

export default NavigationComponent;
