import PropTypes from "prop-types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";


import "../css/project.css";

const ProjectCard = ({ heading, subheading, number, content,image,gitlink,weblink}) => {
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
                <a href={gitlink} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
                
                </a>
              </div>
              <div className='dec-icon'>
                <a href={weblink} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkSlash} size='2x' />
                </a>
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
  gitlink: PropTypes.string.isRequired,
  weblink: PropTypes.string.isRequired,
};

const Project = () => {
  const projectData = [
    {
      heading: "ARCADE",
      subheading: "Ar based Learning Platform",
      number: "01",
      content:
        "An Ar/Vr based learning platform which focus on the learning based on Ar technologies",
      image: "../arcade.png",
      gitlink: "https://github.com/Vibhav-2000/arcade",
      weblink: "https://arcade-9b6f4.web.app/",
    },

    {
      heading: "Hospital Management",
      subheading: "Lorem ipsum dolor sit amet",
      number: "02",
      content:
        "A full stack hospital management system where paitents can book the appointment.The admin dashboard for management of doctors and appointments",
      image: "../Hostpital.png",
      gitlink: "https://github.com/vibhav13122003/Hospital-management",
      weblink: "https://hospital-management-mocha-nu.vercel.app/",
    },

    {
      heading: "Git Hub portfolio",
      subheading: "A Git hub Portfolio",
      number: "03",
      content: "A full stack web chat application ",
      image: "../chatApp.png",
      gitlink: "https://github.com/Vibhav-2000/ChatApp",
      weblink: "https://chatapp-9b6f4.web.app/",
    },
    {
      heading: "Ai canva",
      subheading: "Ai powered Smart canva",
      number: "04",
      content:
        "The canva can the process the drawn images and give the output accordingly",
      image: "../Aicanva.png",
      gitlink: "https://github.com/vibhav13122003/AI-canvas",
      weblink:
        "https://ai-frontend-4sfoxb0c6-vibhav13122003s-projects.vercel.app/",
    },
    {
      heading: "Barter System",
      subheading: "A Barter Trading platform ",
      number: "05",
      content:
        "A full stack web application where user can trade goods and items in a old fashion way.It aims for recyclability and reduction in wastage of items",
      image: "../Barter.png",
      gitlink: "https://github.com/vibhav13122003/BarterSystem",
      weblink: "https://github.com/vibhav13122003/BarterSystem/",
    },
    {
      heading: "AMbuvians",
      subheading: " Ambulance services website",
      number: "06",
      content:
        "A website which provides the ambulance service in case of the emergency.",
      image: "../ambuvians.png",
      gitlink: "https://github.com/Vibhav-2000/ambuvians",
      weblink: "https://ambuvians-9b6f4.web.app/",
    },
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
