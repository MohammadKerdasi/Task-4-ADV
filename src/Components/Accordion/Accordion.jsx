import Accordion from 'react-bootstrap/Accordion';
import { accordionData } from '../../Data/AccordionData';
import './Accordion.css'



const Accordions = () => {
  return (
    <>
    <div className='container'>
        <div className='row flex-column justify-content-center align-items-center mb-5'>
            {accordionData.map((item, index) => (
                <div key={index} className='col-10 my-2'>
                     <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='py-2 px-2 fw-bold border-bottom'>{item.title}</Accordion.Header>
        <Accordion.Body>
            {item.content}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
            ))}

        </div>

    </div>
    </>
  )
}

export default Accordions