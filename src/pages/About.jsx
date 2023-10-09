import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(){
    return(
        <div className="wrapper">
            <div className="header">
                <h1>Alvito <span>Jordan</span></h1>
                <p>+62 81277570949 <span>alvitojordan12@gmail.com</span></p>
            </div>
            <br />
            <main>
                <p>Halo semua! Nama saya Alvito Jordan, saya adalah seorang mahasiswa jurusan Teknik Informatika di Universitas Mikroskil. Saya antusias untuk mengembangkan kemampuan dan keterampilan dalam dunia pengembangan perangkat lunak, khususnya di bidang Front-End dan Back-End Developer. Teknologi dapat menjadi kekuatan besar yang mampu mengubah dunia, dan saya berkomitmen untuk menjadi bagian dari perubahan tersebut.</p>
            </main>
            <br />
            <div className="footer">
                <a href="https://www.linkedin.com/in/alvito-jordan-7433a8278/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/AlvitoJordan"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}

export default About;