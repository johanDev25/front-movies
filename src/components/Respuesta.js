import React, {useState, useContext} from 'react'
import movieContext from '../context/movieContext'

const Respuesta = () => {

  const moviesContext = useContext(movieContext);
  const {movie, agregarPelicula} = moviesContext;

  const [film, setFilm] = useState({
    id_movie: '',
    title: '',
    overview: '',
    vote: '',
    poster: '',
    release: ''
  });

  if (!movie) return null

  const {id, title, overview, vote, poster, release} = movie


  const createMovie = () => {
    setFilm({
      id_movie: id,
      title,
      overview,
      vote,
      poster,
      release
    })
  }

  const submitMovie = e => {
    e.preventDefault()

    agregarPelicula(film)

    setFilm({
      id_movie: '',
      title: '',
      overview: '',
      vote: '',
      poster: '',
      release: ''
    })
  }

  return (
        <div className="card-panel teal">
          <div className="row">
            <form className="col s12" onSubmit={submitMovie}>
              <button onClick={() => createMovie() } className="btn waves-effect waves-light red" type="submit" name="action">
                Agregar a lista
              </button>
                <div className="row">
                  <div className="input-field col s6">
                    <h8 className="white-text">ID</h8>
                    <input className="white-text" type="text" name="id" value={id}/>
                  </div>
                  <div className="input-field col s6">
                    <h8 className="white-text">Titulo</h8>
                    <input className="white-text" type="text" name="title" value={title} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <h8 className="white-text">Reseña</h8>
                    <input className="white-text" type="text" name="overview" value={overview} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <h8 className="white-text">Votacion</h8>
                    <input className="white-text" type="text" name="vote" value={vote}/>
                  </div>
                  <div className="input-field col s6">
                    <h8 className="white-text">Lanzamiento</h8>
                    <input className="white-text" type="text" name="release" value={release} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <h8 className="white-text">Poster</h8>
                    <input className="white-text" type="text" name="poster" value={poster} />
                  </div>
                </div>
            </form>
          </div>
        </div>
  )
}

export default Respuesta
