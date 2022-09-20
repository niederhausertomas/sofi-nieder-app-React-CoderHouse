import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto})=>{
    const onAdd = (cantidad)=>{
        console.log(`se agrego ${cantidad} `)
    }
    return (   
     /*   <div className="cardo">
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text"> $ {producto.precio}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>
                <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
            </div>
        </div>*/

        <div className="cardo mb-3" >
            <div className="row g-0">
                <div className="imagenn col-md-4">
                    <img src={producto.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="tituloCard">{producto.nombre}</h5>
                    <p className="tituloCard"> Precio $ {producto.precio}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus dolorum fuga totam voluptate delectus dolore deleniti.<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>
                    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail