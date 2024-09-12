import {
  faDna,
  faHeartPulse,
  faPills,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import SecondsCard from "../SecondsCard/SecondsCard";

const second = [
  {
    icon: faHeartPulse,
    title: "lorem ipsum",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },

  {
    icon: faPills,
    title: "Sed ut perspici",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    icon: faSyringe,
    title: "Magni Dolores",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    icon: faDna,
    title: "Nemo Enim",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
];

const Second = () => {
  return (
    <div className="container py-5 ">
        <div className="row mx-2" >
      {second.map((item, index) => (
        <div className="col-12 col-md-6 col-lg-3 my-2"  key={index}>
            <SecondsCard
              key={index}
              icon={item.icon}
              title={item.title}
              paragraph={item.paragraph}
              
            />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Second;
