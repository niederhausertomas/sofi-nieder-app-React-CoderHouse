import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import './ItemDetailContainer.css';

const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading ] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db, "Productos", id);
        getDoc(response).then((snapShot)=>{
            if(snapShot.exists){
                console.log(snapShot.data())
                setProducto({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }
        });
    },[id]);
    
    return (
        <div>
             <hr />
             <hr />
             <hr />
            {loading ? <Loading/>:
            <div>
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