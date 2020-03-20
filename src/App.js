import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Formulario from './components/Formulario'
import Respuesta from './components/Respuesta'
import Store from './components/Store'

import MovieState from './context/movieState';

function App() {

  return (
    <MovieState>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Header />
          <main>
            <div className="contenedor-tareas">
              <div className="container">
                <div className="row">
                  <div className="col m7 s10">
                    <div className="col m12">
                    <Formulario />
                    </div>
                    <div className="col m12">
                    <Respuesta />
                    </div>
                  </div>
                  <div className="col m5 s12">
                    <Store />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MovieState>
  );
}

export default App;
