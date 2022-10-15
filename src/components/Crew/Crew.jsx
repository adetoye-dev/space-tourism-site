const Crew = ({ crew, selectCrew, navItems }) => {
  const renderNavItems = navItems.map((item) => (
    <button
      key={item.role}
      onClick={() => selectCrew(item.role)}
      className={
        item.selected
          ? "crew-nav-items crew-nav-items-selected"
          : "crew-nav-items"
      }
    ></button>
  ));
  return (
    <div className="crew-details-container">
      <div className="about-crew-container">
        <div className="about-crew">
          <h2 className="crew-role">{crew.role}</h2>
          <h1 className="crew-name">{crew.name}</h1>
          <p className="crew-bio">{crew.bio}</p>
        </div>
        <div className="crew-nav">{renderNavItems}</div>
      </div>
      <div className="crew-image">
        <img src={crew.images.webp} alt="crew-image" />
      </div>
    </div>
  );
};

export default Crew;
