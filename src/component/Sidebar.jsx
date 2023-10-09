import { Link, useLocation } from 'react-router-dom';
import avatar from "../assets/Alvito Jordan.jpg";

function Sidebar(){
    const location = useLocation();

    return(
        <div className="sidebar">
            <img src={avatar} alt="avatar"></img>
            <nav>
                <ul>
                    <li>
                        <Link to="/about" className={location.pathname === '/' || location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>EXPERIENCE</Link>
                    </li>
                    <li>
                        <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>EDUCATION</Link>
                    </li>
                    <li>
                        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>SKILLS</Link>
                    </li>
                    <li>
                        <Link to="/interests" className={location.pathname === '/interests' ? 'active' : ''}>INTERESTS</Link>
                    </li>
                    <li>
                        <Link to="/awards" className={location.pathname === '/awards' ? 'active' : ''}>AWARDS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;