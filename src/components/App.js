import React from "react";
import { Route, Routes } from "react-router-dom";
import Buscador from "./Buscador";
import DetalleObra from "./DetalleObra";
import Home from "./Home";
import Login from "./Login";
import ObraArte from "./ObraArte";
import Registro from "./Registro";
import Layout from "./Layout";
function App() {
  const token = localStorage.getItem("token");
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          {token && (
            <>
              <Route path="/art_works" element={<ObraArte />} />
              <Route path="/Search" element={<Buscador />} />
              <Route path="/art_work/:id" element={<DetalleObra />} />
            </>
          )}
        </Route>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
