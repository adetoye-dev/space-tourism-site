import { useEffect, useState } from "react";
import "./Crew.css";
import Crew from "./Crew";
import data from "../../../data.json";

const CrewPage = () => {
  const [allCrews, setAllCrews] = useState([]);
  const [crewNavItems, setCrewNavItems] = useState([]);

  useEffect(() => {
    setAllCrews(data.crew.map((crew) => ({ ...crew, selected: false })));
    setCrewNavItems(
      data.crew.map((crew) => ({ role: crew.role, selected: false }))
    );
    selectCrew("Commander");
  }, []);

  const selectCrew = (id) => {
    setCrewNavItems((prevItems) => {
      return prevItems.map((item) => {
        return item.role === id
          ? { ...item, selected: true }
          : { ...item, selected: false };
      });
    });
    setAllCrews((prevCrews) => {
      return prevCrews.map((crew) => {
        return crew.role === id
          ? { ...crew, selected: true }
          : { ...crew, selected: false };
      });
    });
  };

  console.log(crewNavItems);

  const renderCrew = allCrews.map((crew) => {
    return (
      crew.selected && (
        <Crew
          crew={crew}
          key={crew.role}
          selectCrew={selectCrew}
          navItems={crewNavItems}
        />
      )
    );
  });

  return (
    <section className="section crew">
      <div className="container crew-container">
        <h1 className="page-title">
          <span>02</span>Meet your crew
        </h1>
        {renderCrew}
      </div>
    </section>
  );
};

export default CrewPage;
