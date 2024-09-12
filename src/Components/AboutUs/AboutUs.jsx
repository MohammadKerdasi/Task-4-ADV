import { faCheckDouble, faPlay } from "@fortawesome/free-solid-svg-icons";
import about from "./../../../public/img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-12 col-lg-6  position-relative d-flex pt-2 ">
            <img className="container-fluid p-0" src={about} alt="" />
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle"
              style={{
                backgroundColor: "var(--bs-indigo)",
                width: "70px",
                height: "70px",
              }}
            >
              <FontAwesomeIcon
                className="Mk-playIcon"
                icon={faPlay}
                size="x"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 container pt-2 ">
            <h3 className="fw-bold">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="p-0">
              <li className="list-group-item py-1 d-flex">
                <span className="me-1">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    size="sm"
                    style={{ color: "#3bbfc0" }}
                  />
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-group-item py-1 d-flex">
                <span className="me-1">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    size="sm"
                    style={{ color: "#3bbfc0" }}
                  />
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="list-group-item py-1 d-flex">
                <span className="me-1">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    size="sm"
                    style={{ color: "#3bbfc0" }}
                  />
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
