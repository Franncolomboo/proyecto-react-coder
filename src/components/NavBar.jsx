import Carrito from "./CartWidget"

function NavBar(){
    return (
        <div>
            <h1>iSolutions</h1>
            <nav className="navBar-container">
                <ul className="navBar-list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Port Folio</a></li>
                    <li><a href="">Preguntas frecuentes</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><Carrito /></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;