import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importamos tu hook personalizado
import { 
    CheckCircleFilled, 
    RocketOutlined, 
    UserOutlined, 
    MailOutlined, 
    PhoneOutlined, 
    ClockCircleOutlined, 
    DollarOutlined,
    ShoppingOutlined
} from '@ant-design/icons';

function Checkout() {
    const { cart, clearCart } = useCart(); // Usamos los datos de tu context
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        horario: "",
        presupuesto: ""
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [countdown, setCountdown] = useState(20);
    const [orderId, setOrderId] = useState(); 
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFinalize = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        
        setTimeout(() => {
            const generatedId = `FC- ${Math.floor(Math.random() * 9000000) + 1000000}`;
            setOrderId(generatedId);
            setIsProcessing(false);
            setIsFinished(true);
            if(clearCart) clearCart(); 
        }, 2500);
    };

    // Timer para volver al Home automáticamente
    useEffect(() => {
        if (isFinished && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (isFinished && countdown === 0) {
            navigate('/');
        }
    }, [isFinished, countdown, navigate]);

    useEffect(() => {
        if (isFinished && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (isFinished && countdown === 0) {
            navigate('/');
        }
    }, [isFinished, countdown, navigate]);

    if (isFinished) {
        return (
            <div className="checkout-container success">
                <div className="success-content">
                    {/* Círculo verde neón con el check */}
                    <div className="check-container">
                        <CheckCircleFilled className="check-icon" />
                    </div>
                    
                    <h2 className="brand-titles">¡Orden Recibida!</h2>
                    
                    <div className="success-card">
                        <p className="welcome-text">Gracias <strong>{formData.nombre}</strong>, hemos generado tu orden de prioridad.</p>
                        
                        <div className="order-badge">
                            <span className="label">ID de Compra:</span>
                            <span className="value">{orderId}</span>
                        </div>
                        
                        <p className="contact-info">Nos contactaremos contigo en el horario de <strong>{formData.horario}</strong>.</p>
                        
                        <div className="timer-wrapper">
                            <p>Serás redireccionado al inicio en <span>{countdown}</span> segundos...</p>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(countdown / 20) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <button className="btn-home-success" onClick={() => navigate('/')}>
                        Volver al Inicio ahora
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2 className="brand-titles">Finaliza tu Orden</h2>
            <div className="checkout-layout">
                <form onSubmit={handleFinalize} className="checkout-card">
                    <div className="form-section">
                        <h3><UserOutlined /> Datos de Contacto</h3>
                        <div className="input-group">
                            <label>Nombre Completo *</label>
                            <input type="text" name="nombre" required placeholder="Ej: Francisco Colombo" onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>Email de contacto *</label>
                            <input type="email" name="email" required placeholder="tu@email.com" onChange={handleInputChange} />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label><PhoneOutlined /> Teléfono</label>
                                <input type="tel" name="telefono" placeholder="+54 11..." onChange={handleInputChange} />
                            </div>
                            <div className="input-group">
                                <label><ClockCircleOutlined /> Horario preferido *</label>
                                <input type="text" name="horario" required placeholder="Ej: Lunes de 10 a 14hs" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label><DollarOutlined /> Presupuesto disponible</label>
                            <select name="presupuesto" onChange={handleInputChange}>
                                <option value="">Seleccionar rango</option>
                                <option value="Escalable">Menos de $500 USD</option>
                                <option value="Corporativo">$500 - $1500 USD</option>
                                <option value="Enterprise">Más de $1500 USD</option>
                            </select>
                        </div>
                    </div>

                    <div className="order-summary">
                        <hr />
                        <h3><ShoppingOutlined /> Resumen del Carrito</h3>
                        <ul className="checkout-items-list">
                            {cart.map((item) => (
                                <li key={item.id} className="checkout-item">
                                    <span>{item.nombre || item.title}</span>
                                    <span className="qty-tag"> x {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="total-box">
                            <span>Estado de Compra:</span>
                            <span className="price">Pendiente de Presupuesto</span>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`sent-button ${isProcessing ? 'loading' : ''}`} 
                        disabled={isProcessing || !formData.nombre || !formData.email || cart.length === 0}
                    >
                        {isProcessing ? "Procesando Pedido..." : "Confirmar y Finalizar"} <RocketOutlined />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;