import { useParams } from "react-router-dom";

function ItemListContainer() {
    const {idCategory} = useParams();
    
    console.log(idCategory);

    return (
        <main className="content-container">
            {!idCategory ? (<section className="hero-content">
                <div className="brand-titles">
                    <h1 className="brand-title">iSolutions</h1>
                    <p className="signature">Francisco Colombo</p>
                </div>
                <div className="slogan-container">
                    <p>Transformo tus ideas en soluciones robustas y te doy la libertad para dominarlas</p>
                    <button>Conoce mi propuesta</button>
                </div>
                </section>): idCategory==="sobre-mi"?(
                <section className="about-content">
                    <h2>Sobre Mi</h2>
                    <p>Learn more about our company and our mission.</p>
                </section>
                ): idCategory==="portfolio"?(
                <section className="portfolio-content">
                    <h2>Port Folio</h2>
                    <p>Discover our portfolio of projects and case studies.</p>
                </section>
                ): idCategory==="preguntas-frecuentes"?(
                <section className="faq-content">
                    <h2>Preguntas Frecuentes</h2>
                    <p>Find answers to common questions about our products and services.</p>
                </section>
                ): idCategory==="paquetes"?(
                <section className="packages-content">
                    <h2>Paquetes</h2>
                    <p>Explore our range of packages and pricing options.</p>
                </section>
                ): idCategory==="contacto"?(
                <section className="contact-content">
                    <h2>Contacto</h2>   
                    <p>Get in touch with us for inquiries, support, or feedback.</p>
                </section>
                ):(
                <section className="not-found-content">
                    <h2>404 - Página No Encontrada</h2> 
                    <p>Lo sentimos, la página que estás buscando no existe.</p>
                </section>
                )
            }
        </main>
    );
}

export default ItemListContainer;