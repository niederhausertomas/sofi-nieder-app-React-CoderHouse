import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import Carrousel from "../Carrousel/Carrousel";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import './ItemListContainer.css';


const ItemListContainer = ()=>{
    const {id}= useParams();
    const [Productos, setProductos] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const productosCollections = collection(db, "Productos");
        getDocs(productosCollections).then((snapShot)=>{
            if(snapShot.size>0){
                setProductos(snapShot.docs.map(producto=>({id:producto.id, ...producto.data()})));
                setLoading(false);
            }
        })
    },[id]);

    return (
        <div>
            <Carrousel />
             <hr />
            {loading ? <h1 className="cargando"> <Loading /> </h1>
            :
            <div>
            <h2 className="titulo">PRODUCTOS</h2>
            <hr />
            <div className="lista">
            <ItemList Key={Productos[0].id} Prod = {Productos}/>
            </div>
            </div>
            }
        </div>
    )
}

export default ItemListContainer