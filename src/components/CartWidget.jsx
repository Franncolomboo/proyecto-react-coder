import carrito from "../assets/img/carrito.png"

function CartWidget(){
    return(
        <div>
            <img src={carrito} alt="carrito de compras" className="carrito" width={50}/>
        </div>
    );
}

export default CartWidget;