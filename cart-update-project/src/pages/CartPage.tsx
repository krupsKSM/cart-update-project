import { useNavigate } from "react-router-dom";
import Cart from "../components/cart/Cart";

const CartPage = () => {
    const navigate = useNavigate()
    return (<>
        <Cart />
        <button className="bg-gray-300 hover:bg-gray-400 text-black text-sm px-3 py-1 rounded ml-2"
            onClick={() => navigate('/')}>Return to Products</button>
    </>
    )
}
export default CartPage