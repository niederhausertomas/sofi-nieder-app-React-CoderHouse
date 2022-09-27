import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{

    const [cart, setCart] = useState([]);

    const addToCart = (cantidadCompra, item) =>{
       if( cart.map((prod)=> <ItemC key = {prod.Id} prod = {prod}/>)){

       }else{
        const producto = {...item, cantidadCompra};
        setCart ([...cart, producto]);
       }
       
        console.log(cart)

    }


    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
