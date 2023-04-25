import React from "react";
import NavigationComponent from "../../components/HomePageComponents/Navigation";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavigationComponent />

      <h1 className="display-3 my-5 text-center">
        {" "}
        Welcome To File Management System
      </h1>

      <div className="d-grid gap-2 col-4 mx-auto p-5">
        <Link to="/dashboard">
          <button
            type="button"
            className="btn btn-outline-success btn-lg align-content-center"
          >
            Click Here to Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
