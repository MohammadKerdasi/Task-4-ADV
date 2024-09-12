import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Slider.css";

import Gallary_imgs_1 from './../../../public/img/gallery/gallery-1.jpg'
import Gallary_imgs_2 from './../../../public/img/gallery/gallery-2.jpg'
import Gallary_imgs_3 from './../../../public/img/gallery/gallery-3.jpg'
import Gallary_imgs_4 from './../../../public/img/gallery/gallery-4.jpg'
import Gallary_imgs_5 from './../../../public/img/gallery/gallery-5.jpg'
import Gallary_imgs_6 from './../../../public/img/gallery/gallery-6.jpg'
import Gallary_imgs_7 from './../../../public/img/gallery/gallery-7.jpg'
import Gallary_imgs_8 from './../../../public/img/gallery/gallery-8.jpg'

function Slider() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imageSlider = [
      { 
        
        img: Gallary_imgs_1
      },
      { 
        
        img: Gallary_imgs_2
      },
      { 
        
        img: Gallary_imgs_3
      },
      {  

       img: Gallary_imgs_4
      },
      { 
        img: Gallary_imgs_5 
      },
      { 
        img: Gallary_imgs_6
      },
      {
        img :Gallary_imgs_7 
      },
      { 
        img: Gallary_imgs_8
      },
  ];

  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 992) {
      setItemsPerSlide(5);
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

  const getVisibleSlider = () => {
    let visibleSlider = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visibleSlider.push(imageSlider[(index + i) % imageSlider.length]);
    }
    return visibleSlider;
  };

  const getMiddleIndex = () => {
    return Math.floor(itemsPerSlide / 2);
  };

  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col lg={12}>
          <div className="custom-carousel">
            <Row>
              {getVisibleSlider().map((image, idx) => (
                <Col
                  key={idx}
                  className={`flex-nowrap slider-container ${
                    isTransitioning ? "fade-out" : "fade-in"
                  }`}
                >
                  <div>
                    <img
                      className={`container mk-img p-0 ${
                        idx === getMiddleIndex() ? "active" : ""
                      }`}
                      src={image.img}
                      alt=""
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <div className="carousel-indicators-container">
        {imageSlider.map((_, idx) => (
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

export default Slider;
