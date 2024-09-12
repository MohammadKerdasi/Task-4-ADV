import { DoctorsData } from "../../Data/DoctorsData.jsx";

const Doctors = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {DoctorsData.map((item, index) => (
            <div className="col-lg-3 col-md-6 pb-5 " key={index}>
              <div className="shadow">
                <img className="container-fluid p-0" src={item.img} alt="" />
                <div className="p-3">
                  <h3 className="fs-5 fw-bold">{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
