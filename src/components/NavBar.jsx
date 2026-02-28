import { NavLink } from "react-router-dom";
import Carrito from "./CartWidget"

function NavBar(){
    return (
        <div className="nav-container">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/sobre-mi">Sobre mi</NavLink></li>
                    <li><NavLink className="nav-link" to="/portfolio">Port Folio</NavLink></li>
                    <li><NavLink className="nav-link" to="/preguntas-frecuentes">Preguntas frecuentes</NavLink></li>
                    <li><NavLink className="nav-link" to="/paquetes">Paquetes</NavLink></li>
                    <li><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
                    <li><a href=""><Carrito /></a></li>
                </ul>
            </nav>
        </div>
    );
}


export default NavBar;