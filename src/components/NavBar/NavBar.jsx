import React from "react";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-style">
      <div className="container-fluid">
        <a className="navbar-brand" href="./App.jsx">
            <img src="https://i.pinimg.com/originals/7a/3e/e0/7a3ee0297b5a178818ec8bf8ee502bfb.jpg" alt="" className="d-inline-block align-text-top img-nav"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link link-style" href="./App.jsx">
                Carta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-style" href="./App.jsx">
                Combos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-style" href="./App.jsx">
                Top Burgers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget/>
    </nav>
  );
};
