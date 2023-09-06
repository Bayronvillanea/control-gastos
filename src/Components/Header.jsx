
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
export default function Header({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto}) {

  return (
    <header>
      <h1>planilla de gastos</h1>
      {isValidPresupuesto?(
        <ControlPresupuesto
        presupuesto={presupuesto}
        />
      ):(

      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
        
    </header>
  )
}
