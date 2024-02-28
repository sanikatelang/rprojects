import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutPrj}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
                </form>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
                <input
                  className="form-check-input"
                  type="checkbox"        
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable Dark Mode
                </label>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.prototype = {
  title: PropTypes.string.isRequired, //isRequired , meaning when the prop is not passed, it will throw an error in our console.//
  aboutPrj: PropTypes.string,
};

// NavBar.defaultProps={
//     title: 'Set Title Here',
//     aboutPrj:'About PageInfo Here'
// The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed. The defaultProps can be defined as a property on the component class itself, to set the default props for the class.
// }
