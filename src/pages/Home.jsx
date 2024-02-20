

const Home = () => {
  return (
    <div className="home">
      {/* Header Starts */}
      <header className="header" id="navbar-collapse-toggle">
        {/* Fixed Navigation Starts */}
        <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
          <li className="icon-box active">
            <i className="fa fa-home"></i>
            <a href="index.html">
              <h2>Home</h2>
            </a>
          </li>
          <li className="icon-box">
            <i className="fa fa-user"></i>
            <a href="about.html">
              <h2>About</h2>
            </a>
          </li>
          <li className="icon-box">
            <i className="fa fa-briefcase"></i>
            <a href="portfolio.html">
              <h2>Portfolio</h2>
            </a>
          </li>
          <li className="icon-box">
            <i className="fa fa-envelope-open"></i>
            <a href="contact.html">
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
        {/* Fixed Navigation Ends */}
        {/* Mobile Menu Starts */}
        <nav role="navigation" className="d-block d-lg-none">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="list-unstyled" id="menu">
              <li className="active">
                <a href="index.html">
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="about.html">
                  <i className="fa fa-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="portfolio.html">
                  <i className="fa fa-folder-open"></i>
                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i className="fa fa-envelope-open"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Mobile Menu Ends */}
      </header>
      {/* Header Ends */}
      {/* Main Content Starts */}
      <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
        <div className="color-block d-none d-lg-block"></div>
        <div className="row home-details-container align-items-center">
          <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
          <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
            <div>
              <img
                src="img/profile-pict-mobile.png"
                className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                alt="my picture"
              />
              <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">
                hi there !
              </h6>
              <h1 className="text-uppercase poppins-font">
                <span>I`m</span> VIBHAV BHARTIYA
              </h1>
              <p className="open-sans-font">
                An Indonesian based data scientist & AI engineer.
              </p>
              <p className="open-sans-font bold">
                I aim to bridge the gap between{" "}
                <span className="highlight">Dreams</span> and{" "}
                <span className="highlight">Realities</span> with Data & AI
              </p>
              <a href="about.html" className="btn btn-about">
                more about me
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Ends */}
    </div>
  );
};

export default Home;
