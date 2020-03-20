import React, {useContext, useEffect} from 'react'
import movieContext from '../context/movieContext'

const Store = () => {
  const moviesContext = useContext(movieContext);
  const { movies, obtenerPeliculas, eliminarPelicula} = moviesContext;

  useEffect( () => {

    obtenerPeliculas();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="row">
    <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content">
              <span className="card-title white-text">Tus Peliculas</span>
              <hr />
              <ul className="collection">
                {movies.map(movie => (
                  <li className="collection-item avatar" key={movie.id_movie}>
                    <i className="material-icons circle">folder</i>
                    <span className="title">ID: {movie.id_movie}</span>
                    <p>TITULO: {movie.title} <br />
                    FECHA: {movie.release} <br />
                   VOTACION:{movie.vote}
                  </p>
                  <a
                    href="#!"
                    className="secondary-content"
                    onClick={ () => eliminarPelicula(movie.id) }
                    >
                    <i className="material-icons">
                      delete
                    </i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
