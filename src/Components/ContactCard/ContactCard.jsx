import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ContactCard.css'



const ContactCard = ({ className, icon, title, desc }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="mk-shadow w-100 d-flex align-items-center justify-content-center flex-column p-4 ">
        <div className="Mk-ContactIcon d-flex align-items-center justify-content-center ">
        <FontAwesomeIcon size="xl" icon={icon} style={{color: "#3fbbc0",}} className="Mk-IconSize" />
        </div>
        <h3 className="mt-3">{title}</h3>
        <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
