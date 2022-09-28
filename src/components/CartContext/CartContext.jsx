import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{

    const [cart, setCart] = useState([]);
    const isInCart = (Id) => cart.find(product => product.Id === Id)? true : false;
    const clear = () => setCart([]);
    const removeItem = (Id) => setCart(cart.filter(product => product.Id !== Id));
    const cartTotal = () => { return cart.reduce((total, item)=> total+=item.cantidadCompra, 0)}

    const addItem = (quantity, item) =>{
        if (isInCart(item.Id)) {
            setCart(cart.map(product => {
               return product.Id === item.Id ? { ...product, cantidadCompra: product.cantidadCompra + quantity } : product;
            }));
        } else {
           setCart([...cart, {...item, cantidadCompra:quantity}]);
        };
    }


    return (
        <CartContext.Provider value={{cart, addItem, isInCart, clear, removeItem, cartTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
