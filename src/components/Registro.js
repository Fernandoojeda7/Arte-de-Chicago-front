import { useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { registrarse } from "../services";

function Registro() {
  const initialValues = {
    email: "",
    name: "",
    lastName: "",
    dni: "",
    phone: "",
    password: "",
  };

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      return;
    }
    const respuesta = await registrarse(formData);
    if (!respuesta.message) {
      setFormData(initialValues);
      navigate("/login");
    } else {
      setError(respuesta.message);
    }
  };

  return (
    <Row className="g-0">
      <Col
        lg="7"
        xxl="8"
        className="d-none d-lg-inline h-100"
        style={{ maxHeight: "100vh", overflow: "hidden" }}
      >
        <img
          src={require("../assets/imagenes/registro.jpg")}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt=""
        />
      </Col>

      <Col
        lg="5"
        xxl="4"
        xs="12"
        className="px-5 d-flex flex-column justify-content-center"
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="text-center text-dark">Museo de Chicago</h2>
        </Link>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-3 mt-4 "
        >
          {error && (
            <Badge
              className="bg-danger text-white"
              style={{ backgroundColor: "indianred", color: "darkred" }}
            >
              {error}
            </Badge>
          )}
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              size="sm"
              type="text"
              placeholder="Nombre"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar tu Nombre
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              size="sm"
              type="text"
              placeholder="Apellido"
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar tu Apellido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Debes ingresar tu Email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>Documento Identidad</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="DNI"
              required
              value={formData.dni}
              name="dni"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar tu dni.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="telefono"
              required
              value={formData.phone}
              name="phone"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar tu numero de teléfono.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              name="password"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar un password.
            </Form.Control.Feedback>
          </Form.Group>

          <p className="mb-0 fs--1">
            Ya tenés una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </p>
          <Button variant="outline-dark" type="submit">
            Registrarse
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Registro;
