import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import ListaColores from './ListaColores';
import 'animate.css/animate.min.css';
import tinycolor from 'tinycolor2';

const Formulario = () => {
  const [inputColor, setInpuntColor] = useState('');
  const [colorsList, setColorsList] = useState([]);

  useEffect(() => {
    const guardarColor = JSON.parse(localStorage.getItem('colors'));
    if (guardarColor) {
      setColorsList(guardarColor);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isColorValid = tinycolor(inputColor).isValid();

    if (!inputColor.trim() || !isColorValid) {
      
      Swal.fire({
        icon: 'warning',
        title: '¡Fijate Bien !',
        text: 'Ingresa un color en "English", vuelve intentarlo.',
        showClass: {
          popup: 'animate__animated animate__shakeX',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut',
        },
        timer: 4000,
        showConfirmButton: false,
      });
      return;
    }

    const nuevoColor = {
      id: Date.now(),
      nombre: inputColor,
      value: inputColor,
    };
    const colorActualizado = [...colorsList, nuevoColor];
    setColorsList(colorActualizado);
    localStorage.setItem('colors', JSON.stringify(colorActualizado));
    setInpuntColor('');

   
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Se ha agregado un nuevo color.',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      timer: 2000,
      showConfirmButton: false, 
    });
  }

  const handleEliminarColor = (id) => {
    const colorEliminado = colorsList.filter(inputColor => inputColor.id !== id);
    setColorsList(colorEliminado);
    localStorage.setItem('colors', JSON.stringify(colorEliminado));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mt-4 d-flex mb-4' controlId="example.input">
          <Form.Control 
            className='fw-bold'
            type="text" 
            placeholder="Ingrese un Color!"
            onChange={(e) => setInpuntColor(e.target.value)} 
            value={inputColor} 
          />
          <Button  variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>

      <ListaColores colorsList={colorsList} handleEliminarColor={handleEliminarColor} />
    </div>
  );
}

export default Formulario;

