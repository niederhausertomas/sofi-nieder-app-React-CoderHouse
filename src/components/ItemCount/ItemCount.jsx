import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = ({stock, carrito})=>{
    const[contador, setContador] = useState(0)

    function restar(){
        (contador / 0) ? setContador(contador-1): setContador(contador)
    }

    function sumar(){
        (contador < stock) ? setContador(contador+1): setContador(contador)
    }

    return (
        <>
            <div className="containerButton">
                <button className="Boton1" onClick={restar}> - </button>
                    <span className="number" > {contador} </span>
                <button className="Boton1" onClick={sumar}> + </button>
            </div>

                <button className="Agregar" onClick={()=>{
                    if(contador<stock){
                        setContador(contador);
                        }
                    carrito(contador)
                }}> AGREGAR AL CARRITO </button>
        </>
    )
}
export default ItemCount;

