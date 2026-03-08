import { useRef } from "react"; // IMPORTANTE
import { useParams } from "react-router-dom";
import { Collapse, Button } from "antd";
import img from "../assets/img/card-relleno.avif";
import me from "../assets/img/me-photo.avif";

function ItemListContainer() {
    const { idCategory } = useParams();
    const sectionRef = useRef(null);

    const scrollToContent = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
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

            <div ref={sectionRef} style={{ width: '100%' }}>
                {!idCategory ? (
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
                            </div>
                        </div>
                    </section>
                ) : idCategory === "sobre-mi" ? (
                    <section className="about-content">
                        <h2 className="about-title">Sobre Mi</h2>
                        <p className="about-p">Contenido detallado de Sobre Mi...</p>
                    </section>
                ) : idCategory === "portfolio" ? (
                    <section className="portfolio-content">
                        <h2 className="port-title">Portfolio</h2>

                    </section>
                ) : idCategory === "preguntas-frecuentes" ? (
                    <section className="faq-content">
                        <h2 className="faq-title">Preguntas Frecuentes</h2>
                        <Collapse className="faq-collapse" accordion items={faqs}></Collapse>
                    </section>
                ) : null }
            </div>
        </main>
    );
}

export default ItemListContainer;