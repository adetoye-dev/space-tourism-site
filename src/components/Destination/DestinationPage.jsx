import { useEffect, useState } from "react";
import data from "../../../data.json";
import "./Destination.css";
import Destination from "./Destination";

const DestinationPage = () => {
  const [allDestinations] = useState(data.destinations);
  const [destinations, setDestinations] = useState([]);

  const [destinationNavItems, setDestinationNavItems] = useState([]);

  useEffect(() => {
    setDestinations(
      allDestinations.map((destination) => ({
        ...destination,
        selected: false,
      }))
    );

    setDestinationNavItems(
      allDestinations.map((dest) => {
        return { name: dest.name, selected: false };
      })
    );

    selectDestination("Moon");
  }, []);

  const pickDestination = (id) => {
    setDestinations((prevDestinations) => {
      return prevDestinations.map((destination) => {
        return destination.name === id
          ? { ...destination, selected: true }
          : { ...destination, selected: false };
      });
    });
  };

  const selectDestination = (id) => {
    setDestinationNavItems((prevNavItems) => {
      return prevNavItems.map((item) => {
        return item.name === id
          ? { ...item, selected: true }
          : { ...item, selected: false };
      });
    });
    pickDestination(id);
  };

  const renderDestinations = destinations.map((destination) => {
    return (
      destination.selected && (
        <Destination
          destination={destination}
          selectDestination={selectDestination}
          key={destination.name}
          navItems={destinationNavItems}
        />
      )
    );
  });

  return (
    <section className="section destination">
      <div className="container destination-content-container">
        <h1 className="page-title">
          <span>01</span>Pick your destination
        </h1>
        {renderDestinations}
      </div>
    </section>
  );
};

export default DestinationPage;
