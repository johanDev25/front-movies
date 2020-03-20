import React from 'react'
import Filter from '../Filter'

const Sidebar = (props) => {

  return (
    <aside>
      <h1>MOVIE<span>db</span></h1>
      <div className="proyectos">
        <h2>Filtros</h2>
        <Filter />
      </div>
    </aside>
  )
}

export default Sidebar
