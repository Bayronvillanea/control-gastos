
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
export default function Header({gastos,presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,
  setGastos


}) {

  return (
    <header>
      <h1>planilla de gastos</h1>
      {isValidPresupuesto?(
        <ControlPresupuesto
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
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
