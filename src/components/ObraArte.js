import React, { useState, useEffect } from "react";
import Espera from "./Espera";
import { Button, Card } from "react-bootstrap";
import { cargarMas, cargarMenos, obtenerObras } from "../services";
import { Container } from "reactstrap";

function ObraArte() {
  const [obras, setObras] = useState();
  const [pagina, SetPagina] = useState(2);

  useEffect(() => {
    obtenerObras().then((data) => setObras(data));
  }, []);

  const pageMas = async () => {
    await SetPagina(pagina + 1);
    cargarMas(pagina).then((data) => setObras(data));
  };
  const pageMenos = async () => {
    await SetPagina(pagina - 1);
    cargarMenos(pagina).then((data) => setObras(data));
  };
  return (
    <Container className="py-4">
      <h1>Colecciones de Arte</h1>
      <br />
      <div className="d-flex justify-content-between pb-1">
        <Button onClick={pageMenos} variant="outline-dark">
          Anterior{" "}
        </Button>

        <Button onClick={pageMas} variant="outline-dark">
          Siguiente
        </Button>
      </div>

      <br />
      <div className="contenedorMasGrande">
        {!obras ? (
          <Espera />
        ) : (
          obras?.map((obra, i) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "200px", objectFit: "cover" }}
                  variant="top"
                  src={`https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg`}
                />
                <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                  <Card.Title>{obra.title}</Card.Title>
                  <Button variant="link" href={`/art_work/${obra.id}`}>
                    Ver más...
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </Container>
  );
}

export default ObraArte;
