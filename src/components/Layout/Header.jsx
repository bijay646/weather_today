import React from "react";
import { HOME, WEATHER_DETAILS } from "../../constants/routes";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg rounded container"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3" href={HOME.INDEX}>
          WEATHER TODAY
        </a>
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
              <a className="nav-link" aria-current="page" href={HOME.INDEX}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={WEATHER_DETAILS.INDEX}>
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
