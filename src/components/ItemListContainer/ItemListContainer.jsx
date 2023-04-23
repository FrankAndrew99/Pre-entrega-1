import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        if(categoryId) {
            fetch("../json/productos.json")
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(categoryId)) 
                setProductos(productosFiltrados)
            })   
        }else{
            fetch("./json/productos.json")
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0) 
                setProductos(productosFiltrados)
            })
        } 

    }, [categoryId])
    
    return (
        <div className="row">
            {<ItemList productos={productos}/>}
        </div>
    );
}
