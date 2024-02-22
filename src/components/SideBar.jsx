import { Link } from "react-router-dom";
import {
  faHome,
  faUserSecret,
  faCode,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div id='slider'>
      <nav className='my-nav'>
        <ul>
          <li className='my-home'>
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} className='rotate-icon' />
              Home
            </Link>
          </li>
          <li className='my-about'>
            <Link to='/events'>
              <FontAwesomeIcon icon={faUserSecret} className='rotate-icon' />
              About
            </Link>
          </li>
          <li className='my-project'>
            <Link to='/music'>
              <FontAwesomeIcon icon={faCode} className='rotate-icon' />
              Projects
            </Link>
          </li>
          <li className='my-contact'>
            <Link to='/join-us'>
              <FontAwesomeIcon
                icon={faSquareEnvelope}
                className='rotate-icon'
              />
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;