import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { obtenerBusqueda } from "../services";
import Espera from "./Espera";

function Buscador() {
  console.log("se monto el componente");
  const [obras, setObras] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const input = useRef();
  const buscarObra = (e) => {
    e.preventDefault();
    const valor = input.current.value;
    setBusqueda(valor);
  };

  useEffect(() => {
    obtenerBusqueda(busqueda).then((data) => {
      setObras(data);
    });
  }, [busqueda]);

  return (
    <Container className="py-4">
      <h1>Buscador de Arte</h1>
      <br />
      <Form onSubmit={buscarObra} method="GET">
        <Form.Group style={{ maxWidth: "300px" }}>
          <Form.Label htmlFor="">Buscar por Titulo:</Form.Label>
          <Form.Control type="text" ref={input} />
          <div className="d-flex justify-content-end">
            <Button
              size="sm"
              variant="outline-dark"
              className="mt-2"
              type="submit"
            >
              Search
            </Button>
          </div>
        </Form.Group>
      </Form>
      <br />
      <div className="contenedorMasGrande">
        {!obras ? (
          <Espera />
        ) : (
          <ListGroup className="w-100">
            {obras?.map((obra, i) => {
              return (
                <ListGroupItem
                  action
                  href={`/art_work/${obra.id}`}
                  className="d-flex align-items-center gap-2"
                >
                  <img
                    src={
                      obra.thumbnail?.lqip === undefined
                        ? require("../assets/imagenes/desconocido.jpg")
                        : obra.thumbnail?.lqip
                    }
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "cover",
                    }}
                  />

                  <p className=" m-0" style={{ fontSize: "20px" }}>
                    {obra.title}
                  </p>
                </ListGroupItem>
              );
            })}
            {obras.length === 0 && (
              <b>
                No se encontro Obra de Arte - El Titulo debe estar en ingles
              </b>
            )}
          </ListGroup>
        )}
      </div>
    </Container>
  );
}

export default Buscador;
