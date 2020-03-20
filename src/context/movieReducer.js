import {
  DATE_PICKER_OPEN,
  DATE_PICKER_CLOSE,
  OBTENER_PELICULA,
  RESPUESTA_PELICULA,
  AGREGAR_PELICULA,
  BUSQUEDA_PELICULAS,
  FECHA_PELICULAS,
  VALIDAR_PELICULA,
  ELIMINAR_PELICULA,
  PELICULA_ERROR
} from '../types'

export default (state,action) => {
  switch(action.type) {
    case DATE_PICKER_OPEN:
    return{
      ...state,
      date: true
    }
    case DATE_PICKER_CLOSE:
    return{
      ...state,
      date: false
    }
    case FECHA_PELICULAS:
    case BUSQUEDA_PELICULAS:
    case OBTENER_PELICULA:
    return {
      ...state,
      movies: action.payload
    }
    case RESPUESTA_PELICULA:
    return{
      ...state,
      movie: action.payload
    }
    case AGREGAR_PELICULA:
    return{
      ...state,
      movies: [action.payload, ...state.movies ],
      errorformulario: false
    }
    case VALIDAR_PELICULA:
    return{
      ...state,
      errorformulario: true
    }
    case ELIMINAR_PELICULA:
    return{
      ...state,
      movies: state.movies.filter(movie => movie.id !== action.payload),
      movie: null
    }
    case PELICULA_ERROR:
     return {
     ...state,
     mensaje: action.payload
     }

    default:
    return state;
  }
}
