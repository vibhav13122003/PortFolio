import "../css/about.css";
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
import { faWind } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className='container'>
      <h1 className='aboutHeading'>
        About <span> Me</span>
      </h1>

      <div className='firstContainer'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          venenatis neque.
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

          <ul>
            <li>
              <strong>Company A</strong> - Position A (Year A - Year B)
            </li>
            <li>
              <strong>Company B</strong> - Position B (Year C - Year D)
            </li>
            {/* Add more experiences as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
