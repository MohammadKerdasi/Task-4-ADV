import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SecondsCard.css'


const SecondsCard = ({ title, icon, paragraph }) => {
  return (
    <>
    <div className="border-0">
      <Card className="border-0 shadow Mk-hover" >
        <Card.Body className="pt-4 pb-5 px-4">
          <Card.Title className="my-4">
            <FontAwesomeIcon className="mk-iconn" icon={icon} size="2xl" style={{ color: "#3fbbc0" }} />
          </Card.Title>
          <Card.Subtitle style={{fontFamily : 'var(--second-font)' }} className="mb-3 text-body-secondary fs-5 fw-bold">
            {title}
          </Card.Subtitle>
          <Card.Text className="fs-6">
            {paragraph}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default SecondsCard;
