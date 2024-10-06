import PropTypes from "prop-types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";


import "../css/project.css";

const ProjectCard = ({ heading, subheading, number, content,image }) => {
  return (
    <div className='container-project'>
      <div className='content-inner'>
        <div className='content-front'>
          <div className='cf-inner'>
            <div className='overlay'>
              <div className='bg'>
                <img src={image} alt='' />
              </div>
            </div>

            <div className='inner'>
              <h2>{heading}</h2>
              <h4>{subheading}</h4>
            </div>
            <div className='serv-num'>{number}</div>
          </div>
        </div>
        <div className='content-back'>
          <div className='cf-inner'>
            <div className='inner'>
              <div className='dec-icon'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </div>
              <div className='dec-icon'>
                <FontAwesomeIcon icon={faLinkSlash} size='2x' />
              </div>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Project = () => {
  const projectData = [
    {
      heading: "ARCADE",
      subheading: "Lorem ipsum dolor sit amet",
      number: "01",
      content: "Content for Project 1...",
      image: "../arcade.png"
    },
    {
      heading: "Hospital Management",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "../Hospital.png",
      image: "../Hostpital.png"
    },
    {
      heading: "Chat App",
      subheading: "Lorem ipsum dolor sit amet",
      number: "03",
      content: "Content for Project 2...",
      image: "../chatApp.png"
    },
    {
      heading: "Nasa Project",
      subheading: "Lorem ipsum dolor sit amet",
      number: "04",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "05",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "06",
      content: "Content for Project 2...",
    },
    // Add more project data as needed
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <div className='projects-container-outer'>
          <h1>
            {" "}
            My <span>Projects</span>
          </h1>
          <p>View some of my projects</p>
          <div className='projects-container-inner'>
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
