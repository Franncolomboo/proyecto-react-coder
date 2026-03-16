import { useRef } from "react"; // IMPORTANTE
import { useParams } from "react-router-dom";
import { Collapse, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import img from "../assets/img/card-relleno.avif";
import me from "../assets/img/me-photo.avif";
import serviciosData from "../servicios.json";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
// import WorkProcess from "../components/WorkProcess";

function ItemListContainer() {
    const { idCategory } = useParams();
    const sectionRef = useRef(null);
    const servicesRef = useRef(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const scrollToContent = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleGoToServices = () => {
        navigate("/servicios");
    };

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
            {!idCategory && (
                <section className="hero-content">
                    <div className="brand-titles">
                        <h1 className="brand-title">iSolutions</h1>
                        <p className="signature">Francisco Colombo</p>
                    </div>
                    <div className="slogan-container">
                        <p>Transformo tus ideas en soluciones robustas y te doy la libertad para dominarlas</p>
                        <Button className="ant-btn" onClick={scrollToContent}>
                            Conoce mi propuesta
                        </Button>
                    </div>
                </section>
            )}

            <div className="about-main-content" ref={sectionRef}>
                {!idCategory ? (<>
                    <section className="about-content">
                        <div className="about-container">
                            <div className="about-image">
                                <img src={me} alt="" />
                            </div>
                            <div className="about-title-box">
                                <h2 className="about-title">Conoceme</h2>
                            </div>
                            <div className="about-p-content">
                                <p className="about-p">Hola! Soy Francisco. Me dedico a transformar ideas en realidades digitales, creando sitios web a medida que son rápidos, modernos y fáciles de usar. Mi formación académica me permite analizar cada proyecto desde la lógica y la eficiencia, adaptándome a lo que necesites: desde una landing page sencilla hasta plataformas más complejas.

Mi prioridad es que te sientas acompañado en todo el proceso. Me gusta trabajar de forma transparente: escucho tu idea, analizamos juntos la mejor manera de llevarla a cabo y te mantengo al tanto de cada avance. Al estar formándome en Sistemas, no solo busco que tu web se vea bien hoy, sino que esté construida con una base sólida para que pueda crecer junto con tu proyecto.</p>
                            <Button className="ant-btn2" onClick={handleGoToServices}>
                                Conoce mis servicios
                            </Button>
                            </div>
                        </div>
                    </section>
                    </>
                ): idCategory === "servicios" ? (
                    <section ref={servicesRef} className="services-content">
                        <h2 className="services-title">Servicios</h2>
                        <div className="services-grid">
                            {serviciosData.map((servicio) => (
                                <div 
                                    key={servicio.id} 
                                    className="service-card"
                                    style={{ 
                                        background: `linear-gradient(180deg, ${servicio.color} 0%, ${servicio["color-mid"]} 50% , ${servicio["color-end"]} 100%)`
                                    }}
                                >
                                    <div className="card-header">
                                        <h3 className="service-title">{servicio.title}</h3>
                                    </div>

                                    <p className="service-summary">
                                        {servicio.descripcion}
                                    </p>

                                    <Button className="service-btn" onClick={() => addToCart(servicio)}>
                                        {servicio.boton}
                                    </Button>

                                    <div className="separator">

                                    </div>

                                    <ul className="service-features">
                                        {servicio.features.map((feature, index) => (
                                            <li key={index}>
                                                <CheckOutlined className="check-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                ):idCategory === "portfolio" ? (
                    <section className="portfolio-content">
                        <h2 className="port-title">Portfolio</h2>
                        <div className="cards-content">
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img} alt="" />
                                <div className="card-text">
                                    <h3 className="card-title">Proyecto 1</h3>
                                    <p className="card-description">Descripción breve del proyecto 1.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : idCategory === "preguntas-frecuentes" ? (
                    <section className="faq-content">
                        <h2 className="faq-title">Preguntas Frecuentes</h2>
                        <Collapse expandIconPosition="end" expandIcon={({ isActive }) => (<PlusOutlined rotate={isActive ? 90 : 0} style={{ fontSize: '16px', color: '#fff'}} />)} className="faq-collapse" accordion items={faqs}></Collapse>
                    </section>
                ): idCategory==="contacto"?(
                <section className="contact-content">
                    <h2 className="contacto-title">Contacto</h2>  
                    <div className="form-container">
                        <form className="contact-form" action="https://formspree.io/f/xkoqgeyo" method="POST">
                            
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
                            <Button className="sent-button" htmlType="submit">Enviar</Button>
                        </form>
                    </div>
                </section>):
                null }
            </div>
        </main>
    );
}

export default ItemListContainer;