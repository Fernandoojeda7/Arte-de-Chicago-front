import { useState } from "react";
import { Badge, Button, Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }
    const respuesta = await login(formData);
    if (respuesta.token) {
      setFormData(initialValues);
      navigate("/");
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
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={require("../assets/imagenes/registro.jpg")}
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
          className="d-flex flex-column gap-3 mt-4 "
          onSubmit={handleSubmit}
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
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                required
                size="sm"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Debes ingresar tu Email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              size="sm"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Debes ingresar un password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="mb-0 fs--1">
            No tenés una cuenta? <Link to="/register">Registrate</Link>
          </p>
          <Button variant="outline-dark" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
