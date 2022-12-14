import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import './CartWidget.css';
import {NavLink} from "react-router-dom";

const CartWidget = ()=>{
    const{cartTotal}= useContext(CartContext)

    return (
            <NavLink to={"/Cart"} className="d-flex justify-content-end contenedorCarrito">
                <button id="iconoCarrito" className="bg-dark" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
                        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                    </svg>
                    <span className="position-absolute top-1 start-99 translate badge rounded-pill bg-danger">
                        {cartTotal()||""}
                    </span>
                </button>
            </NavLink>
    )
}
export default CartWidget;