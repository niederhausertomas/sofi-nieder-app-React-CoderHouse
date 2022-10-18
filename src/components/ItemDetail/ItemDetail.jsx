import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({producto})=>{
    
    const [carrito, setCarrito] = useState(false);
    const {addItem} = useContext(CartContext);

    const [cant, setCant] = useState(0);
    const onAdd = (data) =>{
        addItem(data, producto);
        setCant(data);
        setCarrito(true);
    }

    return (   
        <div className="cardo mb-3" >
            <div className="row g-0">
                <div className="imagenn col-md-8">
                    <img src= {"../images/" + producto.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="tituloCard">{producto.nombre}</h5>
                        <p className="tituloCard"> Precio $ {producto.precio}</p>
                        <p className="descripcionCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> repellendus dolorum fuga totam voluptate delectus dolore deleniti.</p>
                        </div>{
                            carrito?(
                                <div>
                                    <Link to={`/Cart`} className="detailCompra">
                                        Terminar mi compra
                                    </Link >
                                    <Link to={`/`} className="detailCompra">
                                        Agregar mas productos
                                    </Link >
                                </div>                                    
                            ) : (
                                <ItemCount stock = {producto.cantidad} carrito = {onAdd} />
                            )
                        }
                        <div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail


