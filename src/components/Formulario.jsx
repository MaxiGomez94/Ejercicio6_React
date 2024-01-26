import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaColores from "./ListaColores";
import { useState } from "react";

const Formulario = () => {

const [inputColor,setInputColor]=useState('');
const [arrayColores,setArrayColores]=useState([]);


  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 mt-4 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            className="fw-bold"
            placeholder="Ingrese su Color!"
            pattern="^.{5,30}$"
            title="Ingrese un minimo de 5 caracteres y un maximo de 30"
            onChange={(e)=> setInputColor(e.target.value)}
            value={inputColor}

          />
          <Button type="submit">Agregar</Button>
        </Form.Group>
      </Form>

      <ListaColores></ListaColores>
    </section>
  );
};

export default Formulario;
