import { NavLink } from "react-router-dom";
import Carrito from "./CartWidget"
import { HomeFilled } from '@ant-design/icons';

function NavBar(){
    return (
        <div className="nav-container">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><NavLink className="nav-link" to="/"><HomeFilled /></NavLink></li>
                    <li><NavLink className="nav-link" to="/servicios">Servicios</NavLink></li>
                    <li><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>                    
                    <li><NavLink className="nav-link" to="/preguntas-frecuentes">Faqs</NavLink></li>
                    <li><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
                    <li><a className="carrito-link" href=""><Carrito /></a></li>
                </ul>
            </nav>
        </div>
    );
}


export default NavBar;