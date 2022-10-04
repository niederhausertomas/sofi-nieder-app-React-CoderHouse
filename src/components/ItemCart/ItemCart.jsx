import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import './ItemCart.css';

export const ItemCart = ({ product }) => {
    const{removeItem}= useContext(CartContext);

  return (
     <div className='shoppingContainer'>
        <div className='imageBox'>
            <img src={product.imagen} alt="Product" />
        </div>
        <div className='cartContent'>
            <p className='productInfo'>{product.nombre}</p>
            <p className='productInfo'>Cantidad: {product.cantidadCompra}</p>
            <p className='productInfo'>Precio por unidad: ${product.precio}</p>
            <div className='deleteContainer'>
                <button onClick={() => removeItem(product.id)} className='deleteButton'>x</button>
            </div>     
        </div> 
    </div>
  )
}

export default ItemCart;