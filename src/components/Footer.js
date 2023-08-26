import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioContacto from "./Form";
function Footer() {
  return (
    <div
      className="p-5 d-flex flex-column flex-lg-row gap-3"
      style={{ backgroundColor: "rgb(230,230,230)" }}
    >
      <div style={{ flex: "1" }}>
        <div style={{ width: "fit-content" }}>
          <b>CONTACTO</b>
          <hr />
          <p>
            <strong>Dirección:</strong> 111 S Michigan Ave, Chicago, IL 60603,
            Estados Unidos <br />
            <strong>Departamentos:</strong> Art Institute of Chicago Modern Wing
            Entrance <br />
            <strong>Teléfono:</strong> +1 312-443-3600 <br />
            <strong>Arquitecto:</strong> Renzo Piano <br />
            <strong>Fundación:</strong> 1879 <br />
            <strong>Presidente:</strong> James Rondeau <br />
          </p>
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <FormularioContacto />
      </div>
    </div>
  );
}

export default Footer;
