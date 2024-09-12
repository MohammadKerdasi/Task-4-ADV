import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ServicesCards.css'

const ServicesCards = ({ icon, title, desc }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 px-5 py-4 d-flex flex-column align-items-center justify-content-center text-center ">
        <div
          className="shadow rounded-circle d-flex align-items-center justify-content-center Mk-ServicesIcon"
          style={{ width: "80px", height: "80px", transition : '0.3s all ease' }}
        >
          <FontAwesomeIcon
            icon={icon}
            size="2xl"
            style={{ color: "#3fbbc0" }}
            className="Mk-Icone2"
          />
        </div>
        <div>
          <h3 className="fs-5 py-4 Mk-UnderLine2 position-relative" style={{ color: "var(--bs-lightgray)" }}>
            {title}
          </h3>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default ServicesCards;
