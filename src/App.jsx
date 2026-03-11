import NavBar  from "./components/NavBar" 
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Marquee from "react-fast-marquee"
import { initializeApp } from "firebase/app"
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/:idCategory" element={<ItemListContainer/>} />
            <Route path="/:idItem" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
