import Cart from "./components/cart/Cart"
import ProductList from "./components/products/ProductList"

const App: React.FC = ()=>{

  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Product catalog
        </h1>
        <ProductList/>
        <Cart />
      </div>
    </>
  )
}

export default App
