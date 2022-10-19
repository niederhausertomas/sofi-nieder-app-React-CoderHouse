import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{

    const [cart, setCart] = useState([]);
    const isInCart = (id) => cart.find(product => product.id === id)? true : false;
    const clear = () => setCart([]);
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
    const cartTotal = () => { 
        return cart.reduce((total, item)=> total+=item.cantidadCompra, 0)}
    const precioTotal =  () => { return cart.reduce((pTotal, item)=> pTotal+=item.preco, 0)}

    const addItem = (quantity, item) =>{
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, cantidadCompra: product.cantidadCompra + quantity } : product;
            }));
        } else {
            setCart([...cart, {...item, cantidadCompra:quantity}]);
        };
    }

    const cartSuma = () => {
        return cart.reduce((total, item) => total+=item.cantidadCompra*item.precio, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, isInCart, clear, removeItem, cartTotal, precioTotal, cartSuma}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
