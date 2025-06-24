import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { clearCart, removeFromCart, updateQuantity } from "../../features/cart/cartSlice";

const Cart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector((state: RootState) => state.cart.items)

    const handleRemove = (id: string) => {
        dispatch(removeFromCart(id))
    }

    const handleQuantityChange = (id: string, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }))
        }
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )

    if (items.length === 0) return <p className="p-4">Cart is Empty</p>

    return (
        <>
            <div className="p-4 space-y-4">
                <h2 className="text-xl font-semibold mb-2">Your Cart</h2>

                {items.map(item => (
                    <div key={item.id}
                        className="flex justify-between items-center border p-2 rounded">
                        <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">Rs{item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="number" min={1} value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                className="w-16 border px-2 py-1 rounded" />

                            <button onClick={() => handleRemove(item.id)}
                                className="text-red-600 text-sm">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">Total: Rs {total.toFixed(2)}</p>
                    <button
                        onClick={handleClearCart}
                        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart