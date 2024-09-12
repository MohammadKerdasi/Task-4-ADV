import AppointmentFrom from "../AppointmentForm/AppointmentForm";
import Title from "../Title/Title";

const Appointment = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f7fcfc" }} className="container-fluid">
        <div className="container">
          <Title Title="MAKE AN APPOINTMENT" subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
          <AppointmentFrom/>
        </div>
      </div>
    </>
  );
};

export default Appointment;
