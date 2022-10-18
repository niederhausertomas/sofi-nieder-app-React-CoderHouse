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
                    <div className="totalycheck justify-content-end">
                        <p className="Total-price">Total: ${ totalCompra(cart) }</p> 
                            <button className="Checkout-button"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/></svg>checkout 
                            </button>
                    </div>
                </>
              );}
}
export default Cart;