import React from "react";
import producto1 from "../assets/images/producto1.jpg";
import producto2 from "../assets/images/producto2.jpg";
import producto3 from "../assets/images/producto3.jpg";
import producto4 from "../assets/images/producto4.jpg";
import producto5 from "../assets/images/producto5.jpg";
import producto6 from "../assets/images/producto6.jpg";

const Carrousel = ()=>{
    return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={producto1} className="d-block fCarrousel" alt="imagen del producto 1"/>
    </div>
    <div className="carousel-item">
    <img src={producto2} className="d-block fCarrousel" alt="imagen del producto 2"/>
    </div>
    <div className="carousel-item">
    <img src={producto3} className="d-block fCarrousel " alt="imagen del producto 3"/>
    </div>
    <div className="carousel-item">
    <img src={producto4} className="d-block fCarrousel" alt="imagen del producto 4"/>
    </div>
    <div className="carousel-item">
    <img src={producto5} className="d-block fCarrousel" alt="imagen del producto 5"/>
    </div>
    <div className="carousel-item">
    <img src={producto6} className="d-block fCarrousel" alt="imagen del producto 6"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Carrousel;
