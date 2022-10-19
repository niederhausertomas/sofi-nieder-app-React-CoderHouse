import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "../Success/Success";
import './Checkout.css';

const Checkout = () => {
    const {cart, clear, cartTotal, cartSuma} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = {name:nombre, email:email, phone:telefono};
            const items = [];
            cart.forEach(item => { 
                items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidadCompra});
            });
            const date = new Date();
            const now = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items:items, date:now, total:cartSuma()};
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                clear();
            });
        }
    }

    return (
        <div className="container py-5">
            {cartTotal() > 0 ?
            <div className="row">
                <br/>
                <br/>
                <br/>
                <hr/>
                <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input htmlFor="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => {sendOrder()}}>Generar Orden</button>
                </div>
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={"images/" + item.imagen} alt={item.nombre} title={item.nombre} width="120" /></td>
                                    <td className="text-start align-middle descripcion">{item.nombre} x {item.cantidadCompra}</td>
                                    <td className="text-end align-middle">$ {item.cantidadCompra * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                <td className="text-end fw-bold">${cartSuma()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <Success id={orderId} /> : <div><br/><br/><div className="alert alert-danger text-center" role="alert"> No se encontraron Productos!</div></div>}
        </div>
    )
}

export default Checkout;