import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logosofinieder.jpg";

const NavBar = ()=>{
    return (
    <div className="container">
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand">
                    <img src={logo} id="logo" alt="logo de Sofi Nieder"/>  Sofi Nieder Deco
                </NavLink>
                <CartWidget /> 

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Sofi Nieder Deco</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink to={`/`} className="nav-link active">
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/1`} className="nav-link active">
                                Muebles
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/2`} className="nav-link active">
                                Almohadones
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/3`} className="nav-link active">
                                Percheros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/4`} className="nav-link active">
                                Espejos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/about`} className="nav-link active">
                                About us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default NavBar;
