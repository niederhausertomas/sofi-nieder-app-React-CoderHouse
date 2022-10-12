
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import './ItemCategoriaContainer.css';
import ItemList from    "../ItemList/ItemList"
import Loading from "../Loading/Loading";




const ItemCategoriaContainer = ()=>{
    const [Productos, setProductos] = useState([])
    const [loading, setLoading ] = useState(true)
    const {categoria} = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const productosCollections = collection(db, "Productos");
        const queryProductos = categoria ? query(productosCollections, where("categoria", "==", categoria)): productosCollections;

        getDocs(queryProductos).then((snapShot)=>{
            if(snapShot.size>0){
                setProductos(snapShot.docs.map(producto=>({id:producto.id, ...producto.data()})));
                setLoading(false);
            }
        })
},[categoria])

return (
    <div>
        <hr />
        {loading ? <h1 className="cargando"><Loading /> </h1>
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