
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getFetch} from "../../Mock";
import './ItemCategoriaContainer.css';
import ItemList from "../ItemList/ItemList";




const ItemCategoriaContainer = ()=>{
 
const [Productos, setProductos] = useState([])
const [loading, setLoading ] = useState(true)

const {categoria} = useParams();
useEffect(()=>{
    getFetch
    .then ((respuesta)=>{const productosArray= respuesta.filter(prod=>prod.categoria === categoria); 
        setProductos(productosArray);
    })
    .finally(()=> setLoading(false))
},[categoria])

return (
    <div>
       
         <hr />
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

export default ItemCategoriaContainer