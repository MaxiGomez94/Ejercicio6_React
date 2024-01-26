import {Button, Card } from "react-bootstrap";

const ListaColores = ({ colorsList, handleEliminarColor }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: "20px" }}>
      {colorsList.map(color => (
        <Card key={color.id} className="border-primary">
          <Card.Body className="Color2 text-light  ">
            <Card.Title className="text-center fw-bold">{color.nombre}</Card.Title>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: color.value,
                margin: "auto",
                marginBottom: "10px"
              }}
            ></div>
            <div className="text-center"> {/* Nuevo contenedor para centrar el botón */}
              <Button 
                variant="danger"
                type="submit"
                onClick={() => handleEliminarColor(color.id)}
              >
                Eliminar
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaColores;
