import NavBar  from "./components/NavBar" 
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import './style.scss'


function App() {
  const mensaje = "Bienvenidos a iSolutions";
  return (
    <div>
        <NavBar />
        <ItemListContainer greetings={mensaje} />
        <ItemDetailContainer />
    </div>
  )
}

export default App
