const DestinationBox = ({ destination, navItems, selectDestination }) => {
  const renderNavItems = navItems.map((item) => {
    return (
      <li
        key={item.name}
        onClick={(e) => selectDestination(item.name)}
        className={
          item.selected
            ? "selected destination-nav-item"
            : "destination-nav-item"
        }
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="destination-about">
      <div className="destination-image">
        <img src={`./src${destination.images.webp}`} alt="" />
      </div>
      <div className="destination-details">
        <ul className="destination-nav">{renderNavItems}</ul>
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
  );
};

export default DestinationBox;
