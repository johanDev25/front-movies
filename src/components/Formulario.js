import React, { useState, useContext} from 'react'
import movieContext from '../context/movieContext'

const Formulario = () => {

  const moviesContext = useContext(movieContext);
  const {errorformulario, obtenerResultado, mostrarError} = moviesContext;

  const [movie, setMovie] = useState({
    name: ''
  });

  const {name} = movie;

  const onChangePelicula = e => {
    setMovie({
      ...movie,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitPelicula = e => {
    e.preventDefault()

    if (name === '') {
      mostrarError();
      return;
    }

    obtenerResultado(name);

    setMovie({
      name: ''
    })
  }

  return (
    <form
      onSubmit={onSubmitPelicula}
      >
      {errorformulario ? <p className="mensaje error">Se debe agregar un nombre</p> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChangePelicula}
          />
        <label htmlFor="name">Nombre de la Pelicula: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Pelicula"
          className="waves-effect waves-light btn"
          />
      </div>
    </form>
  )
}

export default Formulario
