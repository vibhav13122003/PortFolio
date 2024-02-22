
import "../css/style.css"

const Home = () => (
  <header className='section sec1 header active' id='home'>
    <div className='header-content'>
      {/* Left header content */}
      <div className='left-header'>
        <div className='h-shape'></div>
        <div className='image'>
          <img src='./images/porfile.png' alt='Vishesh' loading='lazy' />
        </div>
      </div>
      {/* Right header content */}
      <div className='right-header'>
        <h1 className='name'>
          Hi, I&apos;m <span>Vibhav</span>.
        </h1>
        <p>
          A dedicated web developer, I specialize in creating seamless projects
          using React. My passion extends to Python, where I explore the
          exciting realm of machine learning. Feel free to inquire about web
          development or Python, as I am enthusiastic about writing code and
          continually expanding my knowledge with new features. Let&apos;s
          embark on a journey to transform ideas into digital realities
          together.
        </p>
        <div className='btn-container'>
          <a href='#' className='main-btn'>
            <span className='btn-text'>Download CV</span>
            <span className='btn-icon'>
              <i className='fa-solid fa-download'></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Home;
