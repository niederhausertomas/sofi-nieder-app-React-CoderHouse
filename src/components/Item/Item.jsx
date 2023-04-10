import React from "react";
import './Item.css';
import {NavLink} from "react-router-dom";

const Item = ({prod})=>{
    return (
        <div>    
            <div className="card col-6 col-sm-3">
                <NavLink to={`/item/${prod.id}`}>
                    <img src= {"../images/" + prod.imagen} className="card-img-top" alt={prod.nombre}/>
                </NavLink>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text"> $ {prod.precio}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>   
                    <NavLink to={`/item/${prod.id}`}>
                        <button className="Agregar"> Ver </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Item;