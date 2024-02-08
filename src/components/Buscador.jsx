import React, {useState} from "react";
import './Buscador.css';

export const Buscador = ({onBuscar}) => {

    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    const handleClick = () => {
        onBuscar(term)
    }
    return (
        <>
            <h1> Bienvenido a la libreria</h1>
            <div className="container">
                <input type="text" placeholder="Escribe el libro a buscar" value={term} onChange={handleChange}></input> 
                <button onClick={handleClick}>Buscar Libro</button>
            </div>
            
        </>
    );

}