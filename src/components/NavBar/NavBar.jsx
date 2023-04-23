import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-style">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>
            <img src="https://i.pinimg.com/originals/7a/3e/e0/7a3ee0297b5a178818ec8bf8ee502bfb.jpg" alt="" className="d-inline-block align-text-top img-nav"/>
        </Link>
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
        <Categorias/>
      </div>
      <CartWidget/>
    </nav>
  );
};
