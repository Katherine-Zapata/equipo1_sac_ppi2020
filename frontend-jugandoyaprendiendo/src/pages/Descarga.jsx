import React from 'react';
import '../Components/styles/Descarga.css';

class Descarga extends React.Component {
  render() {
    return (
      <div>
        <div className="Descarga">
          <br />
          <h2>Tercero</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img
                  src="https://1.bp.blogspot.com/-nOCF8OUYv3M/XrAr65Tl3iI/AAAAAAAA8aw/8IIRC5Np5JUb_AiR6I46vmD_OkvvYmh6QCNcBGAsYHQ/s1600/TERCERO.jpg"
                  alt="200" width="200"
                />
                <p className="card-text">
                  Descarga el progreso de los estudiantes del grado Tercero
                  </p>
                <cnter><button type="button" className="btn btn-secondary">
                  Desacragar
                    </button></cnter>
              </div>
            </div>
            </div>

            <br />

            <h2>Cuarto</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img
                    src="https://gluc.mx/u/fotografias/m/2020/10/12/f608x342-37364_67087_0.jpg"
                    alt="200" width="200"
                  />
                  <p className="card-text">
                    Descarga el progreso de los estudiantes del grado Cuarto
                  </p>
                  <center><button type="button" className="btn btn-secondary">
                    Desacragar
                    </button></center>
                </div>
              </div>
            </div>

          <br />


          <h2>Quinto</h2>
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <img
                  src="https://i.pinimg.com/originals/8d/55/a5/8d55a5b416b6f3e9a778402339632a39.jpg"
                  alt="200" width="200"
                />
                <p className="card-text">
                  Descarga el progreso de los estudiantes del grado Quinto
                  </p>
                <center><button type="button" className="btn btn-secondary">
                  Descargar
                </button></center>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Descarga;
