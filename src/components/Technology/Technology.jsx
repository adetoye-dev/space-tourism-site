const Technology = ({ tech, selectTech, navItems }) => {
  let navItemCount = 0;
  const renderNavItem = navItems.map((item) => {
    navItemCount += 1;
    return (
      <button
        className={
          item.selected ? "tech-nav-item tech-nav-selected" : "tech-nav-item"
        }
        key={item.name}
        onClick={() => selectTech(item.name)}
      >
        {navItemCount}
      </button>
    );
  });
  return (
    <div className="technology-details">
      <div className="technology-about-container">
        <div className="tech-nav">{renderNavItem}</div>
        <div className="technology-about">
          <h2 className="terminology">THE TERMINOLOGY…</h2>
          <h1 className="technology-name">{tech.name}</h1>
          <p className="technology-desc">{tech.description}</p>
        </div>
      </div>
      <figure class="technology-image">
        <picture>
          <source media="(max-width: 900px)" srcset={tech.images.landscape} />
          <img src={tech.images.portrait} alt="tech image" />
        </picture>
      </figure>
    </div>
  );
};

export default Technology;
