import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Awards(){
    return(
        <div className="wrapper">
            <div className="header">
                <h2>AWARDS & CERTIFICATIONS</h2>
            </div>
            <div className="award-list">
                <ul>
                    <li><FontAwesomeIcon icon={faAward}></FontAwesomeIcon>Sertifikat Course Styling Komponen React</li>
                    <li><FontAwesomeIcon icon={faAward}></FontAwesomeIcon>Sertifikat Course Hasil Maksimal, Usaha Minimal dengan ES6</li>
                    <li><FontAwesomeIcon icon={faAward}></FontAwesomeIcon>Sertifikat Course HTML dan CSS Dasar</li>
                    <li><FontAwesomeIcon icon={faAward}></FontAwesomeIcon>Sertifikat Course Fungsi dan Penggunaan React Native</li>
                </ul>
            </div>
      </div>
    )
}

export default Awards;