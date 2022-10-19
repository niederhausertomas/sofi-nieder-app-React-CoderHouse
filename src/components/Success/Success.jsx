import React from "react";
import Logo from "../../assets/images/logosofinieder.jpg";
import './Success.css';

const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1 className="felicitaciones">Felicitaciones!</h1>
                <br/>
                <p><img src={Logo} alt="logoSofiNieder" width="180" /></p>
                <p className="felicitaciones">La Orden de Compra se generó con el numero de ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default Success;