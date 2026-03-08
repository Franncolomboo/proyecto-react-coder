import githubIcon from '../assets/img/github-icon.png';
import { LinkedinFilled } from '@ant-design/icons';


function Footer() {
    return (
        <footer className="footer-container">
            <div>
                <h3 className="footer-title">iSolutions</h3>
                <ul>
                    <div className="group-link">
                        <img className="icon-github" src={githubIcon} alt="Github" />
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </div>
                    <div className="group-link">
                        <LinkedinFilled className="icon-linkedin" />
                        <li><a href="https://www.linkedin.com/in/francisco-colombo-54a355277/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </div>
                </ul>
            </div>
            <p>&copy; 2024 iSolutions. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;