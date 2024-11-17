import React from 'react';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar(props){
  return (
    <div className='nav-container'>     
       <nav className="navbar navbar-expand-lg bg-body-blue">
        <div className="container-fluid">
          <button className="pro-nav-logo" onClick={props.toggleHome}></button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={props.togglePlanner}>Plan a Trippp!</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={props.toggleBlog}>Blog</button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English(UK)</a></li>
                  <li><a className="dropdown-item" href="#">Espanol (Espana)</a></li>
                  <li><a className="dropdown-item" href="#">Deutsch</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link " onClick={props.toggleLogin}>Sign In</button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="probtn-outline" type="submit" onClick={props.toggleSign}>Sign Up-It's Free!</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  );
}

