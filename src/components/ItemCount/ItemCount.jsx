import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd})=>{
    const[count, setCount] = useState(initial)

    const sumar=()=>{
        if(stock > count){
            setCount(count + 1)
        }
    }

    const restar=()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    const AgregarCantidad=()=>{
        onAdd(count)
    }

    return (
        <>
        <div className="containerButton">
            <div className="Boton1" onClick={restar}> - </div>

            <label> {count} </label>

            <div className="Boton1" onClick={sumar}> + </div>
        </div>
            <button className="Agregar" onClick={AgregarCantidad}> AGREGAR AL CARRITO </button>
        
        
        </>
    )
}
export default ItemCount;