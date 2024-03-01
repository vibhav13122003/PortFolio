import "../css/style.css";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='main'>
      {loading ? (
        <HashLoader
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
                <img src='./images/porfile.png' alt='Vishesh' loading='lazy' />
              </div>
            </div>
            {/* Right header content */}
            <div className='right-header'>
              <h1 className='name'>
                Hi, I&apos;m <span>Vibhav</span>.
              </h1>
              <p>
                A dedicated web developer, I specialize in creating seamless
                projects using React. My passion extends to Python, where I
                explore the exciting realm of machine learning. Feel free to
                inquire about web development or Python, as I am enthusiastic
                about writing code and continually expanding my knowledge with
                new features. Let&apos;s embark on a journey to transform ideas
                into digital realities together.
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
      )}
    </div>
  );
};

export default Home;
