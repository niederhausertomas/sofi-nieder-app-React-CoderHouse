import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({Prod}) => {

    return (
        Prod.map((prod)=> <Item key = {prod.Id} prod = {prod}/>)
    )
    }

export default ItemList;