import githubIcon from '../assets/img/github-icon.png';
import { LinkedinFilled } from '@ant-design/icons';
import { GithubOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { ClockCircleOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <footer className="footer-container">
            <div className='footer-content'>
                <div className='column-links'>
                    <h3 className='footer-subtitles'>Links</h3>
                    <ul className='footer-items'>
                        <div className="group-link">
                            <GithubOutlined className='icon' />  
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
                        </div>
                        <div className="group-link">
                            <LinkedinFilled className="icon" />
                            <li><a href="https://www.linkedin.com/in/francisco-colombo-54a355277/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </div>
                    </ul>
                </div>
                <div className='column-links'>
                    <h3 className='footer-subtitles'>Contacto</h3>
                    <ul className='footer-items'>
                        <div className="group-link">
                            <MailOutlined className='icon'/>
                            <div className='footer-info'>
                                <span className='description-info'>Email</span>
                                <li><p>iSolutions@gmail.com</p></li>
                            </div>
                        </div>
                        <div className="group-link">
                            <ClockCircleOutlined className='icon'/> 
                            <div className='footer-info'>
                                <span className='description-info'>Horario</span>
                                <span>Lun-Vie: 8:00 - 15:00</span>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <p className='copyright'>&copy; 2026 FC Solutions. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;