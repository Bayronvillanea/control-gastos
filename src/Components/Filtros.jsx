import {useState,useEffect} from 'react'

export default function Filtros({filtro,setFiltro}) {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
            <label>
                Flitrar Gastos
            </label>
            <select value={filtro}
            onChange={(e)  => setFiltro(e.target.value)}
            
            >
            <option value="">-- Todas las categorias --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>

            </select>
        </div>
      </form>
    </div>
  )
}
