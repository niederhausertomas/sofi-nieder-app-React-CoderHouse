
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getFetch} from "../../Mock";
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState([])
    const [loading, setLoading ] = useState(true)

    const {id} = useParams();

    useEffect(()=>{
        getFetch
        .then((respuesta)=>setProducto(respuesta.find(prod=>prod.Id === id)))
        .finally(()=> setLoading(false))
},[])
    
    return (
        <div>
            {loading ? <h2 className="cargando">CARGANDO...</h2>
            :
            <div>
            <h2 className="titulo">Item List Container</h2>
            <hr />
            <div className="itemdetail">
            <ItemDetail producto = {producto}/>
            </div>
            </div>
            }
        </div>
    )
}

export default ItemDetailContainer