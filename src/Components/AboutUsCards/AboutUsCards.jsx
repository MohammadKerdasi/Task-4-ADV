import {
  faUserDoctor,
  faHospital,
  faFlask,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardsAbout = [
  {
    icon: faUserDoctor,
    Number: "25",
    subs: "Doctors",
  },
  {
    icon: faHospital,
    Number: "15",
    subs: "Departments",
  },
  {
    icon: faFlask,
    Number: "8",
    subs: "Research Labs",
  },
  {
    icon: faAward,
    Number: "150",
    subs: "Awards",
  },
];

const AboutUsCards = () => {
  return (
    <>
      <div className="container ">
        <div className="row py-5">
          {cardsAbout.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 ">
              <div className="d-flex justify-content-start align-items-center shadow p-4 my-2">
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: "#3bbfc0", fontSize: "45px" }}
                />
                <div className="ms-4">
                  <b
                    className="fw-bold fs-2"
                    style={{ color: "var(--bs-lightgray)" }}
                  >
                    {item.Number}
                  </b>
                  <p
                    className="
                  fs-6"
                  >
                    {item.subs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsCards;
