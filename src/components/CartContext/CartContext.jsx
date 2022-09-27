import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{

    const [cart, setCart] = useState([]);
    const isInCart = (Id) => cart.find(product => product.Id === Id)? true : false;

    const addToCart = (cantidadCompra, item) =>{
        if (isInCart(item.Id)) {
            setCart(cart.map(product => {
                return product.Id === item.Id ? { ...product, cantidadCompra: product.cantidadCompra + cantidadCompra } : product
            }));
        } else {
            setCart([...cart, {...item, cantidadCompra}]);
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
