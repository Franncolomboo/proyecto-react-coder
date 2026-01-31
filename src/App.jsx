import NavBar  from "./components/NavBar" 
import ItemListContainer from "./components/ItemListContainer"
import './style.scss'


function App() {
  const mensaje = "Bienvenidos a iSolutions";
  return (
    <div>
        <NavBar />
        <ItemListContainer greetings={mensaje} />
    </div>
  )
}

export default App
