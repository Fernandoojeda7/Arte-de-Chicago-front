import React from "react";
import visita from "../assets/imagenes/guia.png";

function Main() {
  return (
    <div className="main">
      <h2 className="p-3">
        {" "}
        ¡<span className="span">BIENVENIDOS</span> AL{" "}
        <strong>
          INSTITUTO DE ARTE DE CHICAGO! <br />
          PLANEÁ TU VISITA{" "}
        </strong>
      </h2>
      <div
        className="w-100 d-flex justify-content-center"
        style={{ overflow: "hidden" }}
      >
        <img
          src={visita}
          alt=""
          style={{ width: "150%", objectFit: "contain" }}
          className="w-lg-100"
        />
      </div>
    </div>
  );
}
export default Main;
