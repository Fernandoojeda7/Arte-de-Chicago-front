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
  const [validated, setValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      return;
    }
    const respuesta = await formulario(formValues);
    if (respuesta.message) {
      setFormValues(initialValues);
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
      }, 2000);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate validated={validated}>
      {enviado && (
        <div className="alert alert-success" role="alert">
          Mensaje enviado correctamente
        </div>
      )}
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
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu Email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} xs="12" md="6">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            value={formValues.fullName}
            onChange={handleInputChange}
            name="fullName"
            placeholder="Nombre Completo"
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu Nombre y Apellido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} xs="12">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            value={formValues.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Teléfono"
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu teléfono
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs="12">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            value={formValues.message}
            onChange={handleInputChange}
            name="message"
            placeholder="Mensaje"
            as="textarea"
            rows={1}
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu mensaje
          </Form.Control.Feedback>
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
