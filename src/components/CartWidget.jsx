import { Badge, Button, Popover, List, Typography, Space } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import carritoIcon from "../assets/img/carrito.png";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const { Text } = Typography;

function CartWidget() {
    const { cart, totalQuantity, updateQuantity, removeItem } = useCart();

    const cartContent = (
        <div style={{ width: 320 }}>
            {cart.length > 0 ? (
                <>
                    <List
                        itemLayout="horizontal"
                        dataSource={cart}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button 
                                        type="text" 
                                        danger 
                                        icon={<DeleteOutlined />} 
                                        onClick={() => removeItem(item.id)} 
                                    />
                                ]}
                            >
                                <List.Item.Meta
                                    title={item.title}
                                    description={
                                        <Space direction="vertical" size={0}>
                                            <Text type="secondary">{item.precio || ' Consultar presupuesto'}</Text>
                                            <Space style={{ marginTop: 5 }}>
                                                <Button 
                                                    size="small" 
                                                    icon={<MinusOutlined />} 
                                                    onClick={() => updateQuantity(item.id, -1)} 
                                                />
                                                <Text strong>{item.quantity}</Text>
                                                <Button 
                                                    size="small" 
                                                    icon={<PlusOutlined />} 
                                                    onClick={() => updateQuantity(item.id, 1)} 
                                                />
                                            </Space>
                                        </Space>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                    <div style={{ marginTop: 15, textAlign: 'center', borderTop: '1px solid #f0f0f0', paddingTop: 10 }}>
                        <Link to="/cart">
                            <Button type="primary" block size="large">Finalizar Compra</Button>
                        </Link>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <Text type="secondary">El carrito está vacío</Text>
                </div>
            )}
        </div>
    );

    return (
        <Popover 
            content={cartContent} 
            title="Mis Servicios Seleccionados" 
            trigger="hover" 
            //  
        >
            <Badge count={totalQuantity} offset={[-2, 8]}>
                <Button className="carrito-btn" type="text" style={{ padding: 0, height: 'auto' }}>
                    <img src={carritoIcon} alt="Carrito" style={{ width: '35px' }} />
                </Button>
            </Badge>
        </Popover>
    );
}

export default CartWidget;