import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AppointmentForm.css'
import MakeBtn from '../MakeBtn/MakeBtn';

function AppointmentFrom() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row >
        <Form.Group className="my-2" as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-2" as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Your Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-2" as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Your Phone"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="my-2" as={Col} md="4" controlId="validationCustom03">
          <Form.Control type="datetime-local" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-2" as={Col} controlId="formGridState">
          <Form.Select defaultValue="Choose...">
            <option>Select Department</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="my-2" as={Col} controlId="formGridState">
          <Form.Select defaultValue="Choose...">
            <option>Select Doctor</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="my-2" controlId="exampleForm.ControlTextarea1">
       <Form.Control as="textarea" col="6" rows="6" placeholder="Message (Optinal)" />
      </Form.Group>
      </Row>
      <div className='d-flex align-items-center justify-content-center text-center'>
        <MakeBtn type='submit' className="Mk-Btn2"/>

      </div>
    </Form>
  );
}

export default AppointmentFrom;