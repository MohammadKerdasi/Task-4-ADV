import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3 p-3">
          <div className="col-lg-4">
            <h3 className="mb-3">Medicio</h3>
            <p>A108 Adam Street </p>
            <p className="mb-2">New York, NY 535022</p>
            <p>
              {" "}
              <b>Phone:</b> <span>+1 5589 55488 55</span>
            </p>
            <p>
              {" "}
              <b>Email:</b> <span> info@example.com</span>
            </p>
            <ul className="list-unstyled d-flex flex-row ">
              <li className="me-3 Mk-listItem d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="l"
                  style={{ color: "#444444" }}
                />
              </li>
              <li className="me-3 Mk-listItem d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="l"
                  style={{ color: "#444444" }}
                />
              </li>
              <li className="me-3 Mk-listItem d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="l"
                  style={{ color: "#444444" }}
                />
              </li>
              <li className="me-3 Mk-listItem d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="l"
                  style={{ color: "#444444" }}
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className="mb-3 fs-5">Useful Links</h3>
            <ul className="row list-unstyled">
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Home
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  About us
                </p>{" "}
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Services{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Terms of service{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Privacy policy{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className="mb-3 fs-5">Our Services</h3>
            <ul className="row list-unstyled">
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Web Design
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Web Development
                </p>{" "}
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Product Management{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Marketing{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Graphic Design
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className="mb-3 fs-5">Hic solutasetp</h3>
            <ul className="row list-unstyled">
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Molestiae accusamus iure
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Excepturi dignissimos
                </p>{" "}
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Suscipit distinctio{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Dilecta
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Sit quas consectetur{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className="mb-3 fs-5">Nobis illum</h3>
            <ul className="row list-unstyled">
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Ipsam
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Laudantium dolorum
                </p>{" "}
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Dinera
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Trodelas{" "}
                </p>
              </li>
              <li>
                <p style={{ color: "var(--bs-gray-600)" }} className="mb-2">
                  Flexo{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="px-5 py-4 text-center  mk-border ">
        <p> © Copyright Medicio All Rights Reserved </p> Designed by {" "}
          <a className="list-unstyled" href="http://">
            BootstrapMade
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
