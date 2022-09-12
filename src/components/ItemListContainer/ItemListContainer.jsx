import React, { useEffect, useState } from "react";
import {getFetch} from "../../Mock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';


const ItemListContainer = ()=>{

    const [Productos, setProductos] = useState([])
    const [loading, setLoading ] = useState(true)

    useEffect(()=>{
        getFetch
        .then((respuesta)=>setProductos(respuesta))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
},[])

    return (
        <div>
            {loading ? <h1 className="cargando">CARGANDO...</h1>
            :
            <div>
            <h2 className="titulo">PRODUCTOS</h2>
            <hr />
            <div className="lista">
            <ItemList Prod = {Productos}/>
            </div>
            </div>
            }
        </div>
    )
}

export default ItemListContainer