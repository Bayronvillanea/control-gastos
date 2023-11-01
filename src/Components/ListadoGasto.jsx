import Gasto from "./Gasto"

export default function ListadoGasto({gastos,setGastoEditar,eliminarGasto,
  gastrosFiltrados,filtro


}) {
  return (
    <div className="listado-gasto contenedor">
   

        {
          filtro ?(
            <>
          <h2>{
        gastrosFiltrados.length ? "Gasto":"No hay gastos en esta categoria"
        }</h2>

            {gastrosFiltrados.map(gasto =>(
              <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              />
          ))
            }

          </>
          ):(
            <>
             <h2>{
        gastos.length ? "Gasto":"No hay gastos"
        }</h2>

            {


            gastos.map(gasto =>(
              <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              />
          ))
            }
            
            </>
          )

        }

   
    </div>
  )
}
