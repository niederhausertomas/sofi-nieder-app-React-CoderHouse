import React from "react";
import './ItemDetail.css';


const ItemDetail = ({producto})=>{

    return (   
        <div className="card col-6 col-sm-3">
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text"> $ {producto.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail