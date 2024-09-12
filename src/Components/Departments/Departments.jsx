import { useState } from "react";
import './Departments.css'

import Dep_1 from './../../../public/img/Departments/departments-1.jpg'
import Dep_2 from './../../../public/img/Departments/departments-2.jpg'
import Dep_3 from './../../../public/img/Departments/departments-3.jpg'
import Dep_4 from './../../../public/img/Departments/departments-4.jpg'
import Dep_5 from './../../../public/img/Departments/departments-5.jpg'

function Departments() {
  const tabs = [
    {
      id: "cardiology",
      title: "Cardiology",
      description: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a magna lectus. Quisque at lacus ac quam fringilla tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio earum accusantium similique tenetur odio, veritatis illum officiis. Temporibus aliquid ipsum consectetur, sapiente sunt nobis eveniet error earum explicabo nisi..",
      img: Dep_1,
    },
    {
      id: "neurology",
      title: "Neurology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a magna lectus. Quisque at lacus ac quam fringilla tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio earum accusantium similique tenetur odio, veritatis illum officiis. Temporibus aliquid ipsum consectetur, sapiente sunt nobis eveniet error earum explicabo nisi..",
      img: Dep_2,
    },
    {
      id: "hepatology",
      title: "Hepatology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a magna lectus. Quisque at lacus ac quam fringilla tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio earum accusantium similique tenetur odio, veritatis illum officiis. Temporibus aliquid ipsum consectetur, sapiente sunt nobis eveniet error earum explicabo nisi..",
      img: Dep_3,
    },
    {
      id: "pediatrics",
      title: "Pediatrics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a magna lectus. Quisque at lacus ac quam fringilla tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio earum accusantium similique tenetur odio, veritatis illum officiis. Temporibus aliquid ipsum consectetur, sapiente sunt nobis eveniet error earum explicabo nisi..",
      img: Dep_4,
    },
    {
      id: "ophthalmologists",
      title: "Ophthalmologists",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a magna lectus. Quisque at lacus ac quam fringilla tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio earum accusantium similique tenetur odio, veritatis illum officiis. Temporibus aliquid ipsum consectetur, sapiente sunt nobis eveniet error earum explicabo nisi..",
      img: Dep_5,
    },
  ];

  const [activeTab, setActiveTab] = useState("cardiology");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3 px-3 pb-3 ">
          <ul
            className="nav flex-column nav-pills me-3"
          >
            {tabs.map((tab) => (
              <li key={tab.id} className='nav-item'>
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <b style={{ fontSize : '15px', fontFamily : 'var(--first-font)'}}>{tab.title}</b>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-9 p-0 row m-0">
        <div className="col-lg-8 order-2 order-lg-1">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active d-flex">
              <div>
                <h3>{activeTabData.title}</h3>
                <p>{activeTabData.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-3 order-1 order-lg-2">
          <img className="container-fluid p-0" src={activeTabData.img} alt="img" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
