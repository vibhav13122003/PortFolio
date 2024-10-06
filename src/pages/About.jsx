import "../css/about.css";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faJava,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faWind, faBriefcase } from "@fortawesome/free-solid-svg-icons";
const timelineData = [
  {
    timePeriod: "Feb'23 - Present",
    position: "Member",
    company: "FOSSCU",
    about: `People at FOSSCU (Free and Open-Source Community United ) are a Group of individuals who are constantly working to promote Open-Source Culture.`,
  },
  {
    timePeriod: "March'23 - Present",
    position: "Member (Web Domain)",
    company: "GDSC KIET",
    about: `a club open to all undergraduate and graduate students with an interest in learning about what it means to be a developer. By joining our chapter, club members learn what it means to form the bridge between the theory and concepts taught in classes and practice with industry developer tools.`,
  },
  {
    timePeriod: "March'23 - Nov'23",
    position: "Web Developer",
    company: "Ambuvians HealthCare pvt. ltd.",
    about: `your destination for healthcare and emergency medical services. Our mission is to provide exceptional care promptly and empathetically. As a dedicated ambulance service, we offer rapid assistance to those in need. Led by skilled medical professionals and advanced technology, we lead in medical transportation and emergency response. Our unwavering commitment to excellence makes us a reliable choice during crises.`,
  },
  {
    timePeriod: "Dec'22 - July'23",
    position: "Member",
    company: "Innogeeks KIET",
    about: `a remarkable joint initiative by both faculty and students, strives to elevate our institution and align it with esteemed national and international counterparts. - Focussing on empowering students to excel beyond their academic knowledge, honing their skills for real-world challenges.`,
  },
];

//

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          color='#27ae60'
          speedMultiplier={1.8}
          size={200}
          cssOverride={{
            margin: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <div className='container'>
          <h1 className='aboutHeading'>
            About <span> Me</span>
          </h1>

          <div className='firstContainer'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec venenatis neque.
            </p>
            <p>
              Fusce vel arcu ut mauris lacinia fermentum. Integer ac orci in est
              congue aliquam.
            </p>
            <p>
              Proin eget elit a augue rhoncus sodales eu vel lorem. Sed auctor
              vestibulum fringilla.
            </p>
          </div>

          <div className='secondContainer'>
            <div className='skills-section'>
              <h2>Skills</h2>

              <div className='skills-container'>
                <div className='content-container'>
                  <span>HTML</span>
                  <div className='progress-container'>
                    <progress value='80' max='100'></progress>
                    <span className='percentage'>80%</span>
                  </div>
                </div>
                <div className='img-container html'>
                  <FontAwesomeIcon icon={faHtml5} size='3x' />
                  <span>HTML</span>
                </div>
              </div>
              <div className='skills-container'>
                <div className='content-container'>
                  <span>CSS</span>
                  <div className='progress-container'>
                    <progress value='70' max='100'></progress>
                    <span className='percentage'>70%</span>
                  </div>
                </div>
                <div className='img-container css'>
                  <FontAwesomeIcon icon={faCss3Alt} size='3x' />
                  <span>CSS</span>
                </div>
              </div>
              <div className='skills-container'>
                <div className='content-container'>
                  <span>JavaScript</span>
                  <div className='progress-container'>
                    <progress value='85' max='100'></progress>
                    <span className='percentage'>85%</span>
                  </div>
                </div>
                <div className='img-container js'>
                  <FontAwesomeIcon icon={faJs} size='3x' />
                  <span>JavaScript</span>
                </div>
              </div>
              <div className='skills-container'>
                <div className='content-container'>
                  <span>Java</span>
                  <div className='progress-container'>
                    <progress value='75' max='100'></progress>
                    <span className='percentage'>75%</span>
                  </div>
                </div>
                <div className='img-container java'>
                  <FontAwesomeIcon icon={faJava} size='3x' />
                  <span>Java</span>
                </div>
              </div>
              <div className='skills-container'>
                <div className='content-container'>
                  <span>Node.js</span>
                  <div className='progress-container'>
                    <progress value='80' max='100'></progress>
                    <span className='percentage'>80%</span>
                  </div>
                </div>
                <div className='img-container node'>
                  <FontAwesomeIcon icon={faNode} size='3x' />
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className='frameworks-section'>
              <h2>Frameworks</h2>

              <div className='frameworks-container'>
                <div className='content-container'>
                  <span>React</span>
                  <div className='progress-container'>
                    <progress value='90' max='100'></progress>
                    <span className='percentage'>90%</span>
                  </div>
                </div>
                <div className='img-container react'>
                  <FontAwesomeIcon icon={faReact} size='3x' />
                  <span>React</span>
                </div>
              </div>
              <div className='frameworks-container'>
                <div className='content-container'>
                  <span>Tailwind CSS</span>
                  <div className='progress-container'>
                    <progress value='75' max='100'></progress>
                    <span className='percentage'>75%</span>
                  </div>
                </div>
                <div className='img-container tailwind'>
                  <FontAwesomeIcon icon={faWind} size='3x' />
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className='frameworks-container'>
                <div className='content-container'>
                  <span>Express.js</span>
                  <div className='progress-container'>
                    <progress value='85' max='100'></progress>
                    <span className='percentage'>85%</span>
                  </div>
                </div>
                <div className='img-container express'>
                  <FontAwesomeIcon icon={faNodeJs} size='3x' />
                  <span>Express.js</span>
                </div>
              </div>
            </div>
          </div>
          <div className='thirdContainer'>
            <div className='work-experience'>
              <h2>Work Experience</h2>
              <div className='timeline'>
                {timelineData.map((myTimeline, index) => (
                  <div key={index} className='timeline-item'>
                    <div className='tl-icon'>
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <p className='tl-duration'>{myTimeline.timePeriod}</p>
                    <h5>
                      {myTimeline.position} <span> - {myTimeline.company}</span>
                    </h5>
                    <p className='tl-para'>{myTimeline.about}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
