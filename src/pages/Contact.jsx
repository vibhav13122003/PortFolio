import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='heading'>
        Contact <span>Me</span>
      </h1>
      <div className='secondarycontainer'>
        <h2 className='sub-heading'>
          Get in <span>Touch</span>
        </h2>
        <p>
          I am open for new projects. Feel free to contact me. You can reach{" "}
          <br />
          out to me through the following channels
        </p>
        <div className='email'>
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} beat className='icon' />
          <a href='mailto:vibhavbhartiya13@gmail.com'>
            vibhavbhartiya13@gmail.com
          </a>
        </div>
        <ul className='contact-links'>
          <li className='github'>
            <a href='https://github.com/vibhav13122003'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className='instagram'>
            <a href='https://www.instagram.com/_vibhav_18/'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className='facebook'>
            <a href='https://m.facebook.com/profile.php/?id=100025778060381&name=xhp_nt_'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
