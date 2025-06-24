import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/common/Header"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"

const App: React.FC = ()=>{

  return (
    <>
      <BrowserRouter>
      <Header/>
      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />

        </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
