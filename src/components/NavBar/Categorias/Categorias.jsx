import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link link-style" to={"/"}>
              Carta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-style" to={"/category/1"}>
              Burgers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-style" to={"/category/2"}>
              Combos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-style" to={"/category/3"}>
              Antojos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-style" to={"/category/4"}>
              Bebidas
            </Link>
          </li>
        </ul>
      </div>
    );
}

