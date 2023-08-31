import React from "react";
import './../loading.css';

function Loading() {

    return (
        <span className="progress-spinner">
            <div className="text">Cargando...</div>
            <div className="progress">
                <div className="inner"></div>
            </div>
        </span>
    )
}

export default Loading;