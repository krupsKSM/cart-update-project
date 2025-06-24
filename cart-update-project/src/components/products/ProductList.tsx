import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../features/products/productSlice";
import type { AppDispatch, RootState} from "../../app/store";
import type { Product } from "../../features/products/productTypes";
import { addToCart } from "../../features/cart/cartSlice";

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    // select product state from redux store
    const {products, loading, error} = useSelector(
        (state: RootState) => state.products
    )

    // Fetch products when component mounts
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(loading) return <p>Loading Products...</p>
    if(error) return <p>Error: {error}</p>

    const handleAddToCart = (product: Product) => {
        console.log("Adding to cart:", product.name)
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        }))
    }
    return(
        <div className="grid grid-cols-2 gap-4 p-4">
            {products.map(product=>(
                <div
                    key={product.id}
                    className="border p-4 rounded shadow hover:shadow-lg transition"
                >
                    <img src={product.image} alt={product.name}
                    className="w-full h-40 object-contain mb-2" />

                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">Rs {product.price.toFixed(2)}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                    onClick={()=>handleAddToCart(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList