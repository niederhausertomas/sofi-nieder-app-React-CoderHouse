import React from "react";
import ItemC from "../ItemC/ItemC";

const ItemCategoria = ({Prod}) => {

    return (
        Prod.map((prod)=> <ItemC key = {prod.Id} prod = {prod}/>)
    )
    }

export default ItemCategoria;