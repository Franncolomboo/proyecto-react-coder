import Carrito from "./CartWidget"

function NavBar(){
    return (
        <div>
            <h1 className="brand-name">iSolutions</h1>
            <span className="full-name">Francisco Colombo</span>
            <nav className="navBar-container">
                <ul className="navBar-list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Port Folio</a></li>
                    <li><a href="">Preguntas frecuentes</a></li>
                    <li><a href="">Paquetes</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href=""><Carrito /></a></li>
                </ul>
            </nav>
            <p>
                Transformo tus ideas en soluciones robustas y te doy la libertad para dominarlas.
            </p>
            <div className="button-container">
                <button className="button">Conoce mi Propuesta</button>
            </div>
        </div>
    );
}

export default NavBar;