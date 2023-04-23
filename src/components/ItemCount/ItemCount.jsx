import React from 'react';
import { useCount } from '../../hooks/useCount';

export const ItemCount = ({ValInicial, min, max, onAdd}) => {
    const {count, sum, minus, reset} = useCount(ValInicial, min, max)

    return (
        <>
           <button className="btn btn-dark" onClick={() => minus()}>-</button>
           {count}
           <button className="btn btn-dark" onClick={() => sum()}>+</button> 
           <button className="btn btn-dark" onClick={() => reset()}>Reset</button> 
           <button className="btn btn-secondary" onClick={() => onAdd(count)}>Agregar al carrito</button> 
        </>
    );
}

