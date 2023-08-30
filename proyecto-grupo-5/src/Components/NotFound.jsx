import React from "react";
import Menu from "./Menu";
import './../notfound.css';
//import './../notfound.js';

function NotFound() {

    return (
        <div>
            <Menu />
            <div className="body-not-found">
                <div>
                    <p className="texto">404</p>
                    <p className="texto">NOT FOUND</p>
                </div>
                <div className="container">
                    <div className="nube"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;