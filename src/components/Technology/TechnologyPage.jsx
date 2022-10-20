import { useEffect, useState } from "react";
import "./Technology.css";
import Technology from "./Technology";
import data from "../../../data.json";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TechnologyPage = () => {
  const [allTechnologies, setAllTechnologies] = useState([]);
  const [techNavItems, setTechNavItems] = useState([]);

  const [techParent] = useAutoAnimate();

  useEffect(() => {
    setAllTechnologies(
      data.technology.map((tech) => ({ ...tech, selected: false }))
    );
    setTechNavItems(
      data.technology.map((tech) => ({ name: tech.name, selected: false }))
    );
    selectTech("Launch vehicle");
  }, []);

  const selectTech = (id) => {
    setTechNavItems((prevNavItems) => {
      return prevNavItems.map((item) => {
        return item.name === id
          ? { ...item, selected: true }
          : { ...item, selected: false };
      });
    });
    setAllTechnologies((prevTechs) => {
      return prevTechs.map((tech) => {
        return tech.name === id
          ? { ...tech, selected: true }
          : { ...tech, selected: false };
      });
    });
  };

  const renderTech = allTechnologies.map((tech) => {
    return (
      tech.selected && (
        <Technology
          tech={tech}
          key={tech.name}
          selectTech={selectTech}
          navItems={techNavItems}
        />
      )
    );
  });

  return (
    <section className="section technology">
      <div className="container technology-content-container" ref={techParent}>
        <h1 className="page-title tech-page-title">
          <span>03</span>SPACE LAUNCH 101
        </h1>
        {renderTech}
      </div>
    </section>
  );
};

export default TechnologyPage;
