import React from "react";
import './libro.css'

export const Libro = ({id, titulo, autor, img}) => {

    return (
        <div className="lib-card">
                <img src={`http://localhost:3000${img}`} alt={titulo} />
                <div className="lib-info">
                    <h4>Titulo de la obra:</h4>
                    <p>{titulo}</p>
                    <h4>Autor de la obra:</h4>
                    <p>{autor}</p>
                </div>
        </div>
    );
}