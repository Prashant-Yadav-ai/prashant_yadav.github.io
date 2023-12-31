import { Link } from "react-router-dom";
import React from "react";
import './navbar.css';

function Blogs() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid head">
              <Link className="navbar-brand" to='/'>Prashant</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Features'>Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/About'>About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;