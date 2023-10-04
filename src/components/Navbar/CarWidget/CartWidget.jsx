import { useCartContext } from "../../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
    const { quantityTotal } = useCartContext()
    return (
        <div>
            <img className="img-chart" src="/cart.svg" alt="carrito" />
            {quantityTotal() !== 0 && <strong className="numtotal">{quantityTotal()}</strong>}
        </div>
    )
}

export default CartWidget