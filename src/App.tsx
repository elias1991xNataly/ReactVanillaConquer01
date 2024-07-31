import './App.css'
import { Sandwich } from './components/Title/Sandwich'
import { Dashboard } from './dashboard/Dashboard'
import { Panes, Relleno } from './models/sandwich.model'
// Contenedor = estructura la página
//Obtener la información que se utilizará en sus hijos
function App() {
  const relleno: Relleno ={
    lechuga: true,
    carne: true,
    pepinillo: true,
    mostaza: true,
    mayonesa: false

  };
  const pan: Panes = Panes.SEMILLAS;

  return (
    <>
      <Dashboard />
      <Sandwich relleno={relleno} pan={pan} />
    </>
  )
}

export default App
