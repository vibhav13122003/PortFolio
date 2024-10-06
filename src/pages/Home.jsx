import "../css/style.css";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className='main'>
      {loading ? (
        <HashLoader
          speedMultiplier={1.5}
          color='#27ae60'
          size={200}
          css={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <header className='section sec1 header active' id='home'>
          <div className='header-content'>
            <div className='left-header'>
              <div className='h-shape'></div>
              <div className='image'>
                <img src='./images/porfile.png' alt='Vibhav' loading='lazy' />
              </div>
            </div>
            {/* Right header content */}
            <div className='right-header'>
              <h1 className='name'>
                Hi, I&apos;m <span>Vibhav</span>.
              </h1>
              <p>
                A dedicated web developer, I specialize in creating seamless
                projects using React and the MERN stack. My passion lies in building full-stack
                applications that transform ideas into dynamic digital
                solutions. Feel free to inquire about web development or the
                MERN stack, as I am always enthusiastic about coding and
                exploring the latest technologies. Let&apos;s collaborate to bring
                your visions to life and create impactful web experiences
                together.
              </p>
              <div className='btn-container'>
                  <a
                  href='Resume.pdf' 
                  className='main-btn'
                  download='Vibhav_Resume.pdf'  
                >
                  <span className='btn-text'>Download CV</span>
                  <span className='btn-icon'>
                    <i className='fa-solid fa-download'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Home;
