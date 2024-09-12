import { faClock, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Head = () => {
  return (
    <>
      <div className="container-fluid p-2 " style={{backgroundColor : '#3fbbc0'}}>
        <div className="container text-light d-flex justify-content-md-between justify-content-center    ">
          <div  className="d-none d-md-block">
            <span>
              <FontAwesomeIcon icon={faClock} style={{ color: "#ffffff" }} />
            </span>{" "}
            Monday - Saturday, 8AM to 10PM
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faMobile} style={{ color: "#ffffff" }} />
            </span>{" "}
            Call us now +1 5589 55488 55
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
