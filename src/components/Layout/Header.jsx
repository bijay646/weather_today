import React from "react";
import { HOME, WEATHER_DETAILS } from "../../constants/routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg rounded container"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid py-3">
        <Link className="navbar-brand fs-3" to={HOME.INDEX}>
          WEATHER TODAY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={HOME.INDEX}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={WEATHER_DETAILS.INDEX}>
                Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
