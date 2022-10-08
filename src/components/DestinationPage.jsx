const DestinationPage = () => {
  return (
    <div className="destination-about">
      <div className="destination-image">
        <img src="./src/assets/destination/image-moon.webp" alt="" />
      </div>
      <div className="destination-details">
        <h2 className="destination-title">Moon</h2>
        <p className="destination-desc">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className="travel-details">
          <div className="distance">
            <h3 className="travel-details-title">Avg. Distance</h3>
            <h2 className="travel-details-text">225 MIL. km</h2>
          </div>
          <div className="travel-time">
            <h3 className="travel-details-title">Est. Travel time</h3>
            <h2 className="travel-details-text">9 months</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
