import { useState } from "react"
import Header from "./Components/Header"
import IconoNuevoGasto from'./img/nuevo-gasto.svg'
import { generarId } from "./helpers"
import Modal from "./Components/Modal"



function App() {
  
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValidPresupuesto,setIsValidPresupuesto]= useState(false)

  const [gastos,setGastos]=useState([])


  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const handleNuevoGasto = ()=>{
    setModal(true)

    setTimeout(()=>{
    setAnimarModal(true)
    },500)
  }


  const guardarGasto = gasto =>{
    gasto.id = generarId()
    setGastos([...gastos,gasto])

    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
  }

  return (
    <>
     <Header
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}

      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
     />

     {isValidPresupuesto &&(
      <div className="nuevo-gasto">
      <img 
      src={IconoNuevoGasto}
      alt="icono nuevo gasto"  
      onClick={handleNuevoGasto}
          
          />
    </div>  

     )}
    {modal && <Modal
    setModal={setModal}
    animarModal={animarModal}
    setAnimarModal={setAnimarModal}
    guardarGasto={guardarGasto}
    /> }


    </>
  )
}

export default App
