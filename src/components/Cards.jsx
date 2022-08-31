import React from "react";
import producto1 from "../assets/images/producto1.jpg";
import producto2 from "../assets/images/producto2.jpg";
import producto3 from "../assets/images/producto3.jpg";
import producto4 from "../assets/images/producto4.jpg";
import producto5 from "../assets/images/producto5.jpg";
import producto6 from "../assets/images/producto6.jpg";

const Cards = ()=>{
    return (
    <div>
        <h2 className="titulo">Productos</h2>
        <div className="cards d-flex align-items-center d-flex justify-content-evenly">    
            <div className="card col-6 col-sm-3">
                <img src={producto1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card col-6 col-sm-3">
                <img src={producto2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card col-6 col-sm-3">
                <img src={producto3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card col-6 col-sm-3">
                <img src={producto4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card col-6 col-sm-3">
                <img src={producto5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card col-6 col-sm-3">
                <img src={producto6} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Cards;
