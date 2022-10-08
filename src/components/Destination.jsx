import "./Destination.css";
import DestinationPage from "./DestinationPage";

const Destination = () => {
  return (
    <section className="section destination">
      <div className="container destination-content-container">
        <h1 className="page-title">
          <span>01</span>Pick your destination
        </h1>
        <DestinationPage />
      </div>
    </section>
  );
};

export default Destination;
