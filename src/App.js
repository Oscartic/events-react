import React, { Component } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import './css/index.css';

class App extends Component {

  token = 'DWKP73ZAPCC7GJRU57Y7';

  state = {
    categorias: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
  
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(categorias => {
      this.setState({
        categorias: categorias.categories
      });
    });
  }

  obtenerEventos = async (busqueda) => {
    console.log(busqueda);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Formulario 
          categorias = { this.state.categorias }
          obtenerEventos = {this.obtenerEventos } 
          />
        </div>
      </div>
    );
  }
}

export default App;
