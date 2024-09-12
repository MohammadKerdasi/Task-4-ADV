import { Carousel } from "react-bootstrap";
import './Hero.css'
import HeroBg1 from "./../../../public/img/hero-carousel/hero-carousel-1.jpg";
import HeroBg2 from "./../../../public/img/hero-carousel/hero-carousel-2.jpg";
import HeroBg3 from "./../../../public/img/hero-carousel/hero-carousel-3.jpg";

const carouselData = [
  {
    image: HeroBg1,
    title: "Welcome to Medicio",
    subtitle: " illo quibusdam unde possimus voluptate, provident atque, voluptatem eaque alias reprehenderit cupiditate facilis fugit placeat eveniet natus saepe. Dicta, placeat doloribus.",
    btn : "READ MORE" ,
  },
  {
    image: HeroBg2,
    title: "At vero eos et accusamus",
    subtitle:
      "voluptatem eaque alias reprehenderit cupiditate facilis fugit placeat eveniet natus saepe. Dicta, placeat doloribus. ut labore et dolore magna aliqua.",
      btn : "READ MORE" ,
  },
  {
    image: HeroBg3,
    title: "Temporibus autem quibusdam",
    subtitle:
      "Ut enim ad minim veniam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, illo quibusdam unde possimus voluptate, .",
      btn : "READ MORE" ,
  },
];

const Hero = () => {
  return (
    <Carousel data-bs-theme="dark">
      {carouselData.map((item, index) => (
        <Carousel.Item
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
          }}
          key={index}
        >
          <Carousel.Caption className=" border-top border-5 p-4 CaptionSlider " style={{bottom : '6rem' , backgroundColor : 'rgb(255 255 255 / 80%)'}} >
            <div className="Mk-HeroTexts">
              <h2 className="fs-1 fw-bold mb-4" style={{color : 'var(--bs-lightgray)' , fontFamily : 'var(--second-font)' ,}}>{item.title}</h2>
              <p className="fs-5" style={{color : 'var(--bs-darkgray)'}}>{item.subtitle}</p>
              <button
              type="button"
              style={{ backgroundColor: "#3fbbc0", fontSize: "14px" }}
              className="btn btn-info text-light ms-4 Mk-btn"
            >
              {item.btn}
            </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;

