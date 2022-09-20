import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto})=>{
    const onAdd = (cantidad)=>{
        console.log(`se agrego ${cantidad} `)
    }
    return (   
        <div className="card col-6 col-sm-3">
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text"> $ {producto.precio}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>
                <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail