import React from "react";
import './Cart.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { ItemCart } from "../ItemCart/ItemCart"

const Cart = ()=>{
    const{cart}= useContext(CartContext);
    let total=0;
    function totalCompra(cart){
        console.log("Est[a ingresando!")
        for(const product of cart){    
            total+= product.cantidadCompra * product.precio;
        }
        return total;
    }
    console.log(cart)
    if (cart.length === 0) {
        return (
            <div className="CartInfo">
                <p className="EmptyCart">No hay productos en el Carrito</p>
                <Link className="ProductsLink" to="/">Ver nuestros productos</Link>
            </div>
        )} else if (cart.length !== 0){      
            return (
                <>
                    <br/>
                    <br/>
                    <br/>
                   {
                      cart.map(product => <ItemCart key={product.id} product={product} />) 
                   }
                   <p className="Total-price">Total: ${ totalCompra(cart) }</p>
                   <button className="Checkout-button">Proceed to checkout</button>
                </>
              );}
}
export default Cart;