import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{

    const [cart, setCart] = useState([]);
    const isInCart = (Id) => cart.find(product => product.Id === Id)? true : false;
    const clear = () => setCart([]);
    const removeItem = (Id) => setCart(cart.filter(product => product.Id !== Id));

    const addItem = (quantity, item) =>{
        if (isInCart(item.Id)) {
            setCart(cart.map(product => {
                return product.Id === item.Id ? { ...product, cantidadCompra: product.cantidadCompra + quantity } : product
            }));
        } else {
            setCart([...cart, {...item, cantidadCompra:quantity}]);
        };
    }
    
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, clear, removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
