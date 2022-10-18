import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return (
        <div className="footer">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link active">
                            Home
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to={`/`} className="nav-link active">
                            Home
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to={`/`} className="nav-link active">
                            Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link active">
                            Home
                    </NavLink>
                </li>
</ul>
        </div>
    )
}
export default Footer;