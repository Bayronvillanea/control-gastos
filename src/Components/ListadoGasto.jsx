import Gasto from "./Gasto"

export default function ListadoGasto({gastos,setGastoEditar,eliminarGasto}) {
  return (
    <div className="listado-gasto contenedor">
     <h2>{
        gastos.length ? "Gasto":"No hay gastos"
        }</h2>
        {gastos.map(gasto =>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
  )
}
