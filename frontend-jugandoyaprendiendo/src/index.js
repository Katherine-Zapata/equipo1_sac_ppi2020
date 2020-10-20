import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Aplicacion from './Components/Aplicacion.jsx';
import './Components/styles/Global.css';
import InsigniaNueva from './pages/InsigniaNueva.jsx'
import InfinityMenu from "react-infinity-menu";
import "react-infinity-menu/src/infinity-menu.css";

ReactDOM.render(
  <>
    <Aplicacion />
  </>,
  document.getElementById('root')
);


//import App from './App';
/* const container = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <InsigniaNueva />

  </React.StrictMode>,
  container
);
 */
//CODIGO JSX

//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  ////</React.StrictMode>,
  //document.getElementById('root')
//);

//codigo.sx

/*const jsx=<h1>Hola, estudiantes de la media</h1>

const container = document.getElementById(`root`);



ReactDOM.render(
  jsx,
  conntainer
)*/

//Alternativa React.Js


/*const elemento = React.createElement(`h1`,{}, `Hola, estudiantes  de la media`);
const container = document.getElementById(`root`);

ReactDOM.render(
  elemento,
  container
)*/

/*const elemento = React.createElement(`a`,{herf=`https://github.com/Katherine-Zapata?tab=repositories`}, `Github`);
const container = document.getElementById(`root`);

ReactDOM.render(
  elemento,
  container
)
*/

//jsx

/*const name = `Katherine`
const jsx = <h1>Hola soy {name}</h1>
const container= document.getElementById(`root`);

ReactDOM.render(
  jsx,
  container
)*/

/*const name = `Lucia`
const elemento = React.createElement(`h1`, {}, `Hola soy ${name}`);
const container = document.getElementById(`root`)

ReactDOM.render(
  elemento,
  container
)*/

//JSX
/*const jsx = <h1>Hola el resultado de la suma es: {2+2} </h1>
const container =document.getElementById(`root`);
ReactDOM.render(
  jsx,
  container
)*/

/*const suma =() => 3+3
const jsx = <h1>Hola, el resultado de la suma es: {suma()}</h1>
const container = document.getElementById(`root`);

ReactDOM.render(
  jsx,
  container
)*/

/*const jsx = <div>
  <h1>
    Hola mundo
  </h1>
  <p>
    Soy desarrollador FrontEnd
  </p>
</div>

const container = document.getElementById(`root`);

ReactDOM.render(
  jsx,
  container
)*/

/*const elemento = React.createElement(
  `div`,
  {},
  React.createElement(`h1`, {}, `Hola mundo`),
  React .createElement(`p`, {}, `Soy desarrolladora FrontEnd`)
)
const container = document.getElementById(`root`)
ReactDOM.render(
  elemento,
  container
)*/