
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getFetch} from "../../Mock";
import './ItemCategoriaContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemCategoriaContainer = ()=>{

    const [producto, setProducto] = useState([])
    const [loading, setLoading ] = useState(true)

    const {categoria} = useParams();

    useEffect(()=>{
        getFetch
        .then((respuesta)=>setProducto(respuesta.find(prod=>prod.categoria === categoria)))
        .finally(()=> setLoading(false))
},[])
    
    return (
        <div>
            {loading ? <h2 className="cargando">CARGANDO...</h2>
            :
            <div>
            <h2 className="titulo">{producto.categoria}</h2>
            <hr />
            <div className="itemdetail">
            <ItemDetail producto = {producto}/>
            </div>
            </div>
            }
        </div>
    )
}

export default ItemCategoriaContainer