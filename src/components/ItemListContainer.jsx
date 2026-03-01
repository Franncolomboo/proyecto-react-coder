import { useParams } from "react-router-dom";
import { Collapse} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';

function ItemListContainer() {
    const {idCategory} = useParams();
    
    console.log(idCategory);

    const faqs = [
        {
            key: "1",
            label: "¿Cuáles son los servicios que ofreces?",
            children: "Ofrezco una amplia gama de servicios de desarrollo web, incluyendo diseño de sitios web, desarrollo de aplicaciones web, optimización SEO y mantenimiento continuo."
            },
        {            
            key: "2",
            label: "¿Cuál es tu proceso de trabajo?",
            children: "Mi proceso de trabajo se basa en la colaboración estrecha con mis clientes. Comenzamos con una consulta para entender sus necesidades, luego desarrollo un plan personalizado y finalmente implemento la solución mientras mantengo una comunicación constante."
        },
        {
            key: "3",
            label: "¿Cuánto tiempo lleva completar un proyecto?",
            children: "El tiempo de finalización de un proyecto depende de su complejidad y alcance. Sin embargo, me esfuerzo por entregar resultados de alta calidad dentro de plazos razonables, manteniendo siempre una comunicación transparente sobre el progreso."
        },
        {
            key: "4",
            label: "¿Ofreces soporte después de la entrega del proyecto?",
            children: "Sí, ofrezco soporte continuo después de la entrega del proyecto para asegurarme de que todo funcione correctamente y para realizar cualquier ajuste necesario. Mi objetivo es garantizar la satisfacción total de mis clientes."
        },
        {
            key: "5",
            label: "¿Cuáles son tus tarifas?",
            children: "Mis tarifas varían según el tipo de proyecto y su complejidad. Ofrezco paquetes personalizados para adaptarme a las necesidades específicas de cada cliente. No dudes en contactarme para obtener una cotización detallada."
        }
    ];

    return (
        <main className="content-container">
            {!idCategory ? (<section className="hero-content">
                <div className="brand-titles">
                    <h1 className="brand-title">iSolutions</h1>
                    <p className="signature">Francisco Colombo</p>
                </div>
                <div className="slogan-container">
                    <p>Transformo tus ideas en soluciones robustas y te doy la libertad para dominarlas</p>
                    <Button className="ant-btn-home">Conoce mi propuesta</Button>
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
                    <div>
                        <h2 className="faq-title">Preguntas Frecuentes</h2>
                        <p>Find answers to common questions about our products and services.</p>
                    </div>
                    <Collapse className="faq-collapse" accordion items={faqs}></Collapse>               
                </section>
                ): idCategory==="paquetes"?(
                <section className="packages-content">
                    <h2>Paquetes</h2>
                    <p>Explore our range of packages and pricing options.</p>
                </section>
                ): idCategory==="contacto"?(
                <section className="contact-content">
                    <h2 className="contacto-title">Contacto</h2>   
                    <div className="form-container">
                        <form className="contact-form">
                            <label htmlFor="name">Ingrese su nombre completo:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Ingrese su correo electrónico:</label>
                            <input type="email" id="email" name="email" required />

                            <div className="package-options">
                                <label htmlFor="paquete">Selecciona tu paquete:</label>
                                
                                <div className="package-group">
                                    <input className="package-radio" type="radio" id="paquete-basico" name="paquete" value="basico" />
                                    <label htmlFor="paquete-basico">Paquete Básico</label>
                                </div>

                                <div className="package-group">
                                    <input className="package-radio" type="radio" id="paquete-estandar" name="paquete" value="estandar" />
                                    <label htmlFor="paquete-estandar">Paquete Estándar</label>
                                </div>

                                <div className="package-group">
                                    <input className="package-radio" type="radio" id="paquete-completo" name="paquete" value="completo" />
                                    <label htmlFor="paquete-completo">Paquete Completo</label>
                                </div>
                            </div>

                            <label htmlFor="message">Ingrese su mensaje: (opcional)</label>
                            <textarea id="message" name="message" required></textarea>
                            <Button className="sent-button" type="submit">Enviar</Button>
                        </form>
                    </div>
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