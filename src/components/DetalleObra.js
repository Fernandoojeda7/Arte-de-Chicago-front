import React, { useState, useEffect } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerDetalles } from "../services";

function DetalleObra() {
  const { id } = useParams();
  const [detalles, SetDetalle] = useState([]);

  useEffect(() => {
    obtenerDetalles(id).then((data) => {
      SetDetalle(data);
    });
  }, [id]);

  useEffect(() => {
    console.log(detalles);
  }, [detalles]);
  return (
    // <div id='superDetalle'>
    // <div className='detalles'>
    //     <img src= alt=""
    //     style={{ width: '90%', height: '200px' }}
    //     />
    //     <h5>Titulo: {detalles.title}</h5>
    //     <h5>Artista: {detalles.artist_display}</h5>
    //     <h5>Pais de Origen: {detalles.place_of_origin}</h5>
    //     <h5>Dimensiones: {detalles.dimensions}</h5>
    //     <h5>Linea de Credito: {detalles.credit_line}</h5>
    //     <h5>Tilulo del Departamento: {detalles.department_title}</h5>
    //     <h5>Titulo del Artista: {detalles.artist_title}</h5>
    // </div>
    // </div>
    <Container className="py-4 ">
      <Card className="d-flex flex-column flex-lg-row align-items-center">
        <Card.Body
          className="w-100 w-lg-50"
          style={{ height: "calc(100vh - 106px)" }}
        >
          <Image
            className="h-100 w-100 object-fit-contain"
            src={`https://www.artic.edu/iiif/2/${detalles.image_id}/full/843,/0/default.jpg`}
          />
        </Card.Body>

        <Card.Body
          className="h-lg-100 d-flex flex-column justify-content-center w-100 w-lg-50"
          style={{ textAlign: "justify" }}
        >
          <Card.Title className="text-center fs-1">{detalles.title}</Card.Title>
          <Card.Text>
            <strong>Artista:</strong> {detalles.artist_display}
            <br />
            <strong>Pais de Origen:</strong> {detalles.place_of_origin}
            <br />
            <strong>Dimensiones:</strong> {detalles.dimensions}
            <br />
            <strong>Linea de Credito: </strong>
            {detalles.credit_line}
            <br />
            <strong>Tilulo del Departamento:</strong>{" "}
            {detalles.department_title}
            <br />
            <strong>Titulo del Artista:</strong> {detalles.artist_title}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetalleObra;
