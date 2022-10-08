const DestinationNav = ({ handleClick }) => {
  return (
    <ul className="destination-nav">
      <li
        id="Moon"
        onClick={(e) => handleClick(e.target.id)}
        className="destination-nav-item"
      >
        Moon
      </li>
      <li
        id="Mars"
        onClick={(e) => handleClick(e.target.id)}
        className="destination-nav-item"
      >
        Mars
      </li>
      <li
        id="Europa"
        onClick={(e) => handleClick(e.target.id)}
        className="destination-nav-item"
      >
        Europa
      </li>
      <li
        id="Titan"
        onClick={(e) => handleClick(e.target.id)}
        className="destination-nav-item"
      >
        Titan
      </li>
    </ul>
  );
};

export default DestinationNav;
