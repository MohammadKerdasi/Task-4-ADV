import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./TestimonialsOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialsOne() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const testimonials = [
    {
      img: "testimonials-1.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem odit aut obcaecati quisquam amet ad, facilis ex voluptatem libero quod eum, ullam voluptates corporis explicabo molestiae distinctio culpa nihil!",
      name: "Saul Goodman",
      title: "Ceo & Founder",
    },
    {
      img: "testimonials-2.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem odit aut obcaecati quisquam amet ad, facilis ex voluptatem libero quod eum, ullam voluptates corporis explicabo molestiae distinctio culpa nihil!",
      name: "Sara Wilsson",
      title: "Designer",
    },
    {
      img: "testimonials-3.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem odit aut obcaecati quisquam amet ad, facilis ex voluptatem libero quod eum, ullam voluptates corporis explicabo molestiae distinctio culpa nihil!",
      name: "Jena Karlis",
      title: "Store Owner",
    },
    {
      img: "testimonials-4.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem odit aut obcaecati quisquam amet ad, facilis ex voluptatem libero quod eum, ullam voluptates corporis explicabo molestiae distinctio culpa nihil!",
      name: "Matt Brandon",
      title: "Freelancer",
    },
    {
      img: "testimonials-5.jpg",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem odit aut obcaecati quisquam amet ad, facilis ex voluptatem libero quod eum, ullam voluptates corporis explicabo molestiae distinctio culpa nihil!",
      name: "John Larson",
      title: "Entrepreneur",
    },
  ];

  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 992) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateItemsPerSlide);
    updateItemsPerSlide();
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setIndex(selectedIndex);
      setIsTransitioning(false); 
    }, 300);
  };

  const getVisibleTestimonials = () => {
    let visibleTestimonials = [] ;

    for (let i = 0; i < itemsPerSlide; i++) {
      visibleTestimonials.push(testimonials[(index + i) % testimonials.length]);
    }

    return visibleTestimonials;
  };

  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col lg={12}>
          <div className="custom-carousel">
            <Row>
              {getVisibleTestimonials().map((testimonial, idx) => (
                <Col
                  lg={4}
                  md={12}
                  sm={12}
                  key={idx}
                  className={`testimonial-container ${
                    isTransitioning ? "fade-out" : "fade-in"
                  }`}
                >
                  <div
                    style={{ backgroundColor: "var(--bs-gray-100)" }}
                    className="testimonial-upper"
                  >
                    <p className="fs-6">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        size="xl"
                        style={{ color: "#9cdaca" }}
                      />{" "}
                      {testimonial.quote}{" "}
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        size="xl"
                        style={{ color: "#9cdaca" }}
                      />
                    </p>
                  </div>
                  <div className="testimonial-lower position-realtive text-center">
                    <div className="position-relative">
                      <div className="ImageWithDesc">
                        <div className="testimonial-image">
                          <img
                            src={`/img/testimonials/${testimonial.img}`}
                            alt={testimonial.name}
                            className="rounded-circle border border-4 border-white"
                          />
                        </div>
                        <div className="testimonial-details">
                          <h3 className="fs-5 ms-1 text-start fw-bold">
                            {testimonial.name}
                          </h3>
                          <p className="ms-1 text-start">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
      <div className="carousel-indicators-container">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-indicator ${index === idx ? "active" : ""}`}
            onClick={() => handleSelect(idx)}
            style={{
              backgroundColor: index === idx ? "#3fbbc0" : "white",
              border: "1px solid #3fbbc0",
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export default TestimonialsOne;
