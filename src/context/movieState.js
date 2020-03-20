import React, {useReducer} from 'react';
import movieContext from './movieContext';
import MovieReducer from './movieReducer';

import clienteAxios from '../config/axios';

import * as moment from 'moment';

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

const MovieState = props => {
  const initialState = {
    movies :[],
    date: false,
    errorformulario : false,
    movie : null,
    mensaje: null
  }

  //crear dispatch y state
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const mostrarDatePicker = () => {
    dispatch({
      type: DATE_PICKER_OPEN
    })
  }

  const cerrarDatePicker = () => {
    dispatch({
      type: DATE_PICKER_CLOSE
    })
  }

  const obtenerPeliculas = async () => {
    try {
      const resultado = await clienteAxios.get('/api/v1/movies');
      dispatch({
        type: OBTENER_PELICULA,
        payload: resultado.data
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  const obtenerResultado = async name => {
    try {
      const resultado = await clienteAxios.get(`/api/v1/movies/${name}`);
      dispatch({
        type: RESPUESTA_PELICULA,
        payload: resultado.data
      })
    } catch (e) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  const agregarPelicula = async movie => {
    try {
      const resultado = await clienteAxios.post('/api/v1/movies', movie)
      dispatch({
        type: AGREGAR_PELICULA,
        payload: resultado.data
      })
    } catch (e) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  const obtenerBusqueda = async word => {
    try {
      const resultado = await clienteAxios.get(`/api/v1/movies?query=${word}`);
      dispatch({
        type: BUSQUEDA_PELICULAS,
        payload: resultado.data
      })
    } catch (e) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  const fechaBusqueda = async (start_date, end_date) => {
    try {
      const Sdate = moment(start_date).format("YYYY-MM-DD");
      const Edate = moment(end_date).format("YYYY-MM-DD");
      const resultado = await clienteAxios.get(`/api/v1/movies?start=${Sdate}&end=${Edate}`);
      dispatch({
        type: FECHA_PELICULAS,
        payload: resultado.data
      })
    } catch (e) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  //valida el formulario de tarea
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_PELICULA
    })
  }

  //Eliminar tarea por id
  const eliminarPelicula = async (id) => {
    try {
      await clienteAxios.delete(`/api/v1/movies/${id}`)
      dispatch({
        type: ELIMINAR_PELICULA,
        payload: id
      })
    } catch (e) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PELICULA_ERROR,
        payload: alerta
      })
    }
  }

  return (
    <movieContext.Provider
      value={{
        movies : state.movies,
        date : state.date,
        errorformulario : state.errorformulario,
        movie : state.movie,
        mensaje: state.mensaje,
        mostrarDatePicker,
        cerrarDatePicker,
        obtenerPeliculas,
        obtenerResultado,
        fechaBusqueda,
        agregarPelicula,
        obtenerBusqueda,
        mostrarError,
        eliminarPelicula
      }}
      >
      {props.children}
    </movieContext.Provider>
  )
}

export default MovieState;
