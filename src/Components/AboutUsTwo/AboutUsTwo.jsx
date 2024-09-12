import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about_2 from "./../../../public/img/features.jpg";

import "./AboutUsTwo.css";
import { faHandHoldingMedical, faLungs, faStaffSnake, faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";

const AboutUsTwo = () => {
  return (
    <>
      <div className="container p-2 ">
        <div className="row">
          <div className="col-12 col-lg-6  px-3 d-flex">
            <img className="container-fluid p-0" style={{objectFit : 'cover' ,  }} src={about_2} alt="" />
          </div>
          <div className="col-12 col-lg-6 px-3" >
            <h3 className="fw-bold Mk-UnderLine position-relative pb-3">
              Enim quis est voluptatibus aliquid consequatur fugiat
            </h3>
            <p
              className="mt-3 mb-5"
              style={{
                fontFamily: "var(--first-font)",
                color: "var(--bs-darkgray)",
              }}
            >
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
              voluptate sed facere corporis dolores excepturi
            </p>
            <div className="container p-0 ">
              <div className="d-flex flex-row mb-4">
                <div style={{width : "50px" , height : "50px" , padding : '30px'}} className="shadow d-flex justify-content-center align-items-center ">
                <FontAwesomeIcon
                  icon={faHandHoldingMedical}
                  style={{ color: "#3fbbc0" }}
                  size="2xl"
                />
                </div>
                <div className="mx-4">
                  <b className="fs-4 " style={{fontFamily : 'var(--second-font)' , color : 'var(--bs-lightgray)'}}>lorem ipsum</b>
                  <p className="mt-2" style={{fontSize : '14px'}}>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div style={{width : "50px" , height : "50px" , padding : '30px'}} className="shadow d-flex justify-content-center align-items-center ">
                <FontAwesomeIcon
                  icon={faSuitcaseMedical}
                  style={{ color: "#3fbbc0" }}
                  size="2xl"
                />
                </div>
                <div className="mx-4">
                  <b className="fs-4 " style={{fontFamily : 'var(--second-font)' , color : 'var(--bs-lightgray)'}}>lorem ipsum</b>
                  <p className="mt-2"  style={{fontSize : '14px'}}>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div style={{width : "50px" , height : "50px" , padding : '30px'}} className="shadow d-flex justify-content-center align-items-center ">
                <FontAwesomeIcon
                  icon={faStaffSnake}
                  style={{ color: "#3fbbc0" }}
                  size="2xl"
                />
                </div>
                <div className="mx-4">
                  <b className="fs-4 " style={{fontFamily : 'var(--second-font)' , color : 'var(--bs-lightgray)'}}>lorem ipsum</b>
                  <p className="mt-2"  style={{fontSize : '14px'}}>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div style={{width : "50px" , height : "50px" , padding : '30px'}} className="shadow d-flex justify-content-center align-items-center ">
                <FontAwesomeIcon
                  icon={faLungs}
                  style={{ color: "#3fbbc0" }}
                  size="2xl"
                />
                </div>
                <div className="mx-4">
                  <b className="fs-4 " style={{fontFamily : 'var(--second-font)' , color : 'var(--bs-lightgray)'}}>lorem ipsum</b>
                  <p className="mt-2"  style={{fontSize : '14px'}}>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTwo;
