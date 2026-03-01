import NavBar  from "./components/NavBar" 
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Marquee from "react-fast-marquee"

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/:idCategory" element={<ItemListContainer/>} />
            <Route path="/:idItem" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
