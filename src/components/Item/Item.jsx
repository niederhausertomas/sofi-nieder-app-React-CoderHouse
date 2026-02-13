import React from "react";
import './Item.css';
import {NavLink} from "react-router-dom";

const Item = ({ prod }) => {
    return (
        <div className="item-card-wrapper">
            <div className="card">
                <NavLink to={`/item/${prod.id}`} className="card-img-link">
                    <div className="card-img-wrapper">
                        <img src={"../images/" + prod.imagen} className="card-img-top" alt={prod.nombre} />
                    </div>
                </NavLink>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">$ {prod.precio}</p>
                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>
                    <NavLink to={`/item/${prod.id}`}>
                        <button className="Agregar">Ver</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Item;