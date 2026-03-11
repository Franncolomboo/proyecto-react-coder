import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const isItemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
            if (isItemInCart) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id, amount) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + amount;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Cantidad total de productos (suma de todas las cantidades)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};