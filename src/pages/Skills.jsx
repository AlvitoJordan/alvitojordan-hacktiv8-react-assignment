import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills(){
    return(
        <div className="wrapper">
            <div className="header">
                <h2>SKILLS</h2>
            </div>
            <div className="subtitle">
                <h4>PROGRAMMING LANGUANGE & TOOLS</h4>
            </div>
            <br />
            <div className="list">
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>HTML</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>CSS</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Javascript</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Nodejs</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>React</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Python</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Flutter</li>
                <li><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>C++</li>
              </ul>
            </div>
      </div>
    )
}

export default Skills;