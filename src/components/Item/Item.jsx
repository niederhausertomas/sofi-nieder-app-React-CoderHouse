import React from "react";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({prod})=>{

    const onAdd = (cantidad)=>{
        console.log(`se agrego ${cantidad} `)
    }

    return (
    <div>
        <div className="cards d-flex align-items-center d-flex justify-content-evenly">    
            <div className="card col-6 col-sm-3">
                <img src={prod.imgagen} className="card-img-top" alt={prod.nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text"> $ {prod.precio}</p>
                    <hr/>
                    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Item;