import React, {Fragment, useState, useContext} from 'react'
import movieContext from '../context/movieContext'

import { DateRangePicker } from 'react-date-range';

const Filter = () => {

  const moviesContext = useContext(movieContext);
  const { date, obtenerPeliculas, mostrarDatePicker, cerrarDatePicker, obtenerBusqueda, fechaBusqueda} = moviesContext;

  const [busqueda, setBusqueda] = useState('');

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const onClickDatePicker = () => {
    mostrarDatePicker()
  }

  const closeDatePicker = () => {
    cerrarDatePicker()
  }

  const buscarResultado = e => {
    e.preventDefault()

    if(busqueda.trim() === '') return;

    obtenerBusqueda(busqueda)
  }

  const onChangeDate = item => {
    setState([item.selection])
    if (item.selection.endDate !== '') {
      fechaBusqueda(item.selection.startDate, item.selection.endDate )
    }
  }


  return (
    <Fragment>
      <form onSubmit={buscarResultado}>
        <div className="row">
          <div className="input-field col s9">
            <input type="text" id="autocomplete-input" className="autocomplete" onChange={e => setBusqueda(e.target.value)}/>
            <label for="autocomplete-input">Busca en tu coleccion</label>
          </div>
          <div className="input-field col s2">
            <button className="waves-effect waves-light" type="submit" name="action">
              <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <a className="waves-effect waves-light btn" href="#!" onClick={obtenerPeliculas}>Quitar Filtros</a>
      </div>
      <div className="row">
        <a className="waves-effect waves-light btn" href="#!"  onClick={date ? closeDatePicker : onClickDatePicker}>{date ? "Cerrar" : "Buscar entre fechas"}</a>
      </div>
      <div className="row">
      </div>
      {date ?
        <DateRangePicker
          onChange={item => onChangeDate(item)}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
          />
        : null}
      </Fragment>
    )
  }

  export default Filter
