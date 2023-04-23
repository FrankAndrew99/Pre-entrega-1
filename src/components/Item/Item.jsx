import React from "react";
import { Link } from "react-router-dom";
export const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={`/${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre} - {item.combo}</h5>
        <p className="card-text">Precio: ${item.precio}</p>
        <p className="card-text">Stock: {item.stock}</p>
        <Link className="nav-link" to={`/item/${item.id}`}><button className=" btn btn-secondary">Ver Producto</button></Link>
      </div>
    </div>
  );
};

