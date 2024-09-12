import { faDna, faHeartPulse, faHospitalUser, faNotesMedical, faPills, faWheelchair } from "@fortawesome/free-solid-svg-icons"
import ServicesCards from "../ServicesCards/ServicesCards"

const servicesData = [
    {
        icon : faHeartPulse,
        title : 'Nesciunt Mete',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
        icon : faPills,
        title : 'Eosle Commodi',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
        icon : faHospitalUser,
        title : 'Ledo Markt',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
        icon : faDna,
        title : 'Asperiores Commodit',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
        icon : faWheelchair,
        title : 'Velit Doloremque',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
        icon : faNotesMedical,
        title : 'Dolori Architecto',
        desc : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
]

const Services = () => {
  return (
    <>
    <div className="container">
        <div className="row ">
            {
                servicesData.map((item , index) => {
                    return(
                        <ServicesCards key={index} icon={item.icon} title = {item.title} desc={item.desc}/>
                    )
                })
            }

        </div>

    </div>

    </>
  )
}

export default Services