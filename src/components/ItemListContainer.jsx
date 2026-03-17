import { useState, useRef ,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Collapse, Button, Steps, Typography } from "antd";
import { PlusOutlined, CheckOutlined, SolutionOutlined, RocketOutlined, SmileOutlined } from '@ant-design/icons';
import img from "../assets/img/card-relleno.avif";
import me from "../assets/img/me-photo.avif";
import serviciosData from "../servicios.json";
import { useCart } from "../context/CartContext";

const { Text } = Typography;

function ItemListContainer() {
    const { idCategory } = useParams();
    const sectionRef = useRef(null);
    const servicesRef = useRef(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [current, setCurrent] = useState(0);



    const onChange = (value) => {
        setCurrent(value);
    };

    const pasosProceso = [
        {
            title: 'Briefing',
            content: 'Analizamos tus necesidades y definimos los objetivos del proyecto.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon2 icon-tabler icons-tabler-outline icon-tabler-target-arrow"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path d="M15 6v3h3l3 -3h-3v-3l-3 3" /><path d="M15 9l-3 3" /></svg>
        },
        {
            title: 'Desarrollo',
            content: 'Transformo las ideas en código limpio, escalable y optimizado.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon2 icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        },
        {
            title: 'Entrega',
            content: 'Lanzamiento del proyecto y soporte para asegurar el éxito total.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon2 icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
        },
        {
            title: 'Entrega',
            content: 'Bla bla bla bla',
            icon: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon2 lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>
        }
    ];

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrent((prev) => (prev === pasosProceso.length - 1 ? 0 : prev + 1));
    //     }, 22000); // Sincronizado con CSS

    //     return () => clearInterval(timer);
    // }, [pasosProceso.length]);

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
                        <h1 className="brand-title">FC Solutions</h1>
                        <p className="signature">Francisco Colombo</p>
                    </div>
                    <div className="slogan-container">
                        <p className="slogan">Creamos <span className="span-principal">soluciones digitales escalables</span> diseñadas para potenciar <br /> <span className="span-marca">tu marca</span> y optimizar tus procesos</p>
                        <button className="button-home" onClick={scrollToContent}>
                            <span>Iniciar Proyecto</span>
                            <svg className="svg-arrow" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#000000"/></svg> 
                        </button>
                    </div>
                </section>
            )}
            <div className="about-main-content" ref={sectionRef}>
                {!idCategory ? (
                    <section className="about-content">
                        <div className="about-container">
                            <div className="about-image">
                                <img src={me} alt="Francisco Colombo" />
                            </div>
                            <div className="about-title-box">
                                <h2 className="about-title">Conoceme</h2>
                            </div>
                            <div className="about-p-content">
                                <p className="about-p">Hola! Soy Francisco. Me dedico a transformar ideas en realidades digitales, creando sitios web a medida que son rápidos, modernos y fáciles de usar. Mi prioridad es que te sientas acompañado en todo el proceso.</p>
                                <Button className="ant-btn2" onClick={handleGoToServices}>
                                    Conoce mis servicios
                                </Button>
                            </div>
                        </div>
                    </section>
                ) : idCategory === "servicios" ? (
                    <section ref={servicesRef} className="services-content">
                        <h2 className="services-title">Servicios</h2>
                        <div className="services-grid">
                            {serviciosData.map((servicio, index) => (
                                <div
                                    key={servicio.id} 
                                    className="service-card"
                                    style={{ 
                                        background: `linear-gradient(180deg, ${servicio.color} 0%, ${servicio["color-mid"]} 50% , ${servicio["color-end"]} 100%)`,
                                        "--i": index
                                    }}
                                >
                                    <div className="card-header">
                                        <h3 className="service-title">{servicio.title}</h3>
                                    </div>
                                    <p className="service-summary">{servicio.descripcion}</p>
                                    <Button className="service-btn" onClick={() => addToCart(servicio)}>
                                        {servicio.boton}
                                    </Button>
                                    <div className="separator"></div>
                                    <ul className="service-features">
                                        {servicio.features.map((feature, fIndex) => (
                                            <li key={fIndex}>
                                                <CheckOutlined className="check-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        <div className="proceso-container">
                            <h2 className="services-title">Mi Proceso</h2>
                            <Steps 
                                key={current}
                                current={current} 
                                onChange={onChange}
                                items={pasosProceso.map(item => ({
                                    title: item.title,
                                    icon: item.icon
                                }))}
                            />
                            <div className="step-context-box">
                                <Text className="step-description-text">
                                    {pasosProceso[current].content}
                                </Text>
                            </div>
                        </div>


                    </section>
                ) : idCategory === "portfolio" ? (
                    <section className="portfolio-content">
                        <h2 className="port-title">Portfolio</h2>
                        <div className="cards-content">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <div className="card" key={index} style={{ "--i": index }}>
                                    <img src={img} alt="" />
                                    <div className="card-text">
                                        <h3 className="card-title">Proyecto {index + 1}</h3>
                                        <p className="card-description">Descripción breve del proyecto {index + 1}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : idCategory === "preguntas-frecuentes" ? (
                    <section className="faq-content">
                        <h2 className="faq-title">Preguntas Frecuentes</h2>
                        <Collapse expandIconPosition="end" expandIcon={({ isActive }) => (<PlusOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px', color: '#fff'}} />)} className="faq-collapse" accordion items={faqs}></Collapse>
                    </section>
                ) : idCategory === "contacto" ? (
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
                    </section>
                ) : null}
            </div>
        </main>
    );
}

export default ItemListContainer;