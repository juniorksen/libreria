import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'
import { Buscador } from './components/Buscador'
import { Libro } from './components/Libro';

export const App = () => {
  
  const [Libros, setLibros] = useState([]);
  const [term, setTerm] = useState('')

  const handleBuscar = (term) => {
    setTerm(term);
  };
  useEffect(() => {
      axios.get('http://localhost:3000/api/libros').then(res => {
          setLibros(res.data);
          console.log(res.data)
      }).catch(err => {
          console.error('Error al llamar la informacion', err)
      });
  }, []);
  return (
    <>
      <Buscador onBuscar={handleBuscar}/>
        <div className='wrapper'>
        {
          Libros.filter(libro => 
            libro.titulo.toLowerCase().includes(term.toLowerCase())
          ).map( libro => (
            <Libro key={libro.id} titulo={libro.titulo} autor={libro.autor} img={libro.img} />
          ))
        }
        </div>
    </>
  );
}
