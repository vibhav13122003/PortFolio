import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";

import "../css/project.css";

const ProjectCard = ({ heading, subheading, number, content }) => {
  return (
    <div className='container-project'>
      <div className='content-inner'>
        <div className='content-front'>
          <div className='cf-inner'>
            <div className='bg'>
              <img src='../arcade.png' alt='' />
            </div>
            <div className='overlay'></div>
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

const Project = () => {
  const projectData = [
    {
      heading: "Project 1",
      subheading: "Lorem ipsum dolor sit amet",
      number: "01",
      content: "Content for Project 1...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "Content for Project 2...",
    },
    {
      heading: "Project 2",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content: "Content for Project 2...",
    },
    // Add more project data as needed
  ];

  return (
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
  );
};

export default Project;
