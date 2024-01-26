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
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, ingrese un color válido.',
        showClass: {
          popup: 'animate__animated animate__shakeX',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut',
        },
        timer: 2000,
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

    // Mostrar SweetAlert de éxito con animación
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
      timer: 2000, // 3 segundos
      showConfirmButton: false, // No mostrar botón "OK"
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
            pattern="^[^\d]{3,20}$"
            title="Debe ingresar un mínimo de 3 y un máximo de 20 caracteres, sin incluir números."
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
