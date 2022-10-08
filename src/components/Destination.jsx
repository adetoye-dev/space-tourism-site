import { useEffect, useState } from "react";
import data from "../../data.json";
import "./Destination.css";
import DestinationNav from "./DestinationNav";

const Destination = () => {
  const [allDestinations] = useState(data.destinations);
  const [destination, setDestination] = useState({});

  useEffect(() => {
    renderData("Moon");
  }, []);

  const renderData = (id) => {
    allDestinations.map((dest) => {
      if (id == dest.name) {
        setDestination({
          name: dest.name,
          image: dest.images.webp,
          description: dest.description,
          distance: dest.distance,
          travel: dest.travel,
        });
      }
    });
  };

  return (
    <section className="section destination">
      <div className="container destination-content-container">
        <h1 className="page-title">
          <span>01</span>Pick your destination
        </h1>
        <div className="destination-about">
          <div className="destination-image">
            <img src={`./src${destination.image}`} alt="" />
          </div>
          <div className="destination-details">
            <DestinationNav handleClick={renderData} />
            <h2 className="destination-title">{destination.name}</h2>
            <p className="destination-desc">{destination.description}</p>
            <div className="travel-details">
              <div className="distance">
                <h3 className="travel-details-title">Avg. Distance</h3>
                <h2 className="travel-details-text">{destination.distance}</h2>
              </div>
              <div className="travel-time">
                <h3 className="travel-details-title">Est. Travel time</h3>
                <h2 className="travel-details-text">{destination.travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
