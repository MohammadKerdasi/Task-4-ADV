import { Col, Form, Row } from "react-bootstrap";
import { contactCardData } from "../../Data/ContactCardsData";
import ContactCard from "../ContactCard/ContactCard";
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <iframe
        width={`100%`}
        height={`500px`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355378.891023664!2d41.64323629402979!3d34.7873906581411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2z2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1718242439712!5m2!1sar!2s"
        allowfullscreen
        loading="lazy"
        title="responsive google map"
      ></iframe>
      <div className="container my-5 p-4">
        <div className="d-flex justify-content-between flex-lg-row flex-column ">
          <div className="row mt-2 gy-2 col-lg-6 col-12">
            {contactCardData.map((card, index) => (
              <ContactCard
                key={index}
                className={card.className}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
          <div className="mt-3 col-lg-6 col-12 mk-shadow p-4">
            <Form>
              <Row>
                <Form.Group
                  className="my-2"
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                >
                  <Form.Control required type="text" placeholder="Your Name" className="p-2 border rounded-0 " />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="my-2"
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                >
                  <Form.Control required type="text" placeholder="Your Email" className="p-2 border rounded-0 " />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="my-2"
                  as={Col}
                  md="12"
                  controlId="validationCustom02"
                >
                  <Form.Control required type="text" placeholder="Your Phone" className="p-2 border rounded-0 " />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="my-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    col="6"
                    rows="6"
                    placeholder="Message" className="mk-textarea"
                  />
                </Form.Group>
              </Row>
              <div className="d-flex align-items-center justify-content-center text-center">
                <button className="py-2 px-4 Mk-ContactBtn border-0 text-white mt-5">Send Message </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
