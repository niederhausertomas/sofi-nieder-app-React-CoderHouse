import React from "react";
import './Cart.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { ItemCart } from "../ItemCart/ItemCart"

const Cart = ()=>{
    const{cart}= useContext(CartContext);
    const{precioTotal}= useContext(CartContext);
    console.log(cart)
    
    if (cart.length === 0) {
        return (
            <div className="CartInfo">
                <ItemCart />
                <p className="EmptyCart">Your cart is empty</p>
                <Link className="ProductsLink" to="/">Look for our products</Link>
            </div>
        )} else{      
            return (
                <>
                    <br/>
                    <br/>
                    <br/>
                   {
                      cart.map(product => <ItemCart key={product.id} product={product} />) 
                   }
                   <p className="Total-price">Total: ${ precioTotal() }</p>
                   <button className="Checkout-button">Proceed to checkout</button>
                </>
              );}

/*import ItemCart from "./ItemCart";

const Cart = () => {
   
	return (
      <>
         {
            cart.map(product => <ItemCart key={product.id} product={product} />) 
         }
         <p className="Total-price">Total: ${ totalPrice() }</p>
		 <button className="Checkout-button">Proceed to checkout</button>
      </>
	);
}; */

}
export default Cart;