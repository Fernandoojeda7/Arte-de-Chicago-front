import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { formulario } from "../services";

function FormularioContacto() {
  const initialValues = {
    email: "",
    fullName: "",
    phone: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    await formulario(formValues);
    setFormValues(initialValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Form.Group as={Col} xs="12" md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={formValues.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Correo Electrónico"
          />
        </Form.Group>

        <Form.Group as={Col} xs="12" md="6">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            value={formValues.fullName}
            onChange={handleInputChange}
            name="fullName"
            placeholder="Nombre Completo"
          />
        </Form.Group>

        <Form.Group as={Col} xs="12">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            value={formValues.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Teléfono"
          />
        </Form.Group>
        <Form.Group as={Col} xs="12">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            value={formValues.message}
            onChange={handleInputChange}
            name="message"
            placeholder="Mensaje"
          />
        </Form.Group>
        <Col
          xs="12"
          className="d-flex justify-content-center justify-content-lg-end"
        >
          <Button variant="outline-dark" type="submit">
            Enviar Mensaje
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormularioContacto;
