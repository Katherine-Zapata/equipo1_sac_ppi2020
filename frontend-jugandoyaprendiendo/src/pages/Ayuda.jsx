import React from "react";
import '../Components/styles/Ayuda.css';

class Ayuda extends React.Component {
    render() {
        return (

            <div>
                <br />
                <h2>Usar Jugando y Aprendiendo </h2>
                <div className="row">
                    <div className="col-md-2">
                        <div className="card">

                            <img src="https://img2.freepng.es/20180613/yii/kisspng-computer-icons-icon-design-help-icon-5b210a9577f528.4284229615288920534914.jpg" alt="100" width="100"
                            />
                            <p >
                                Primero debes crear una cuenta, segundo debes hacer un repaso de la historia, herramientas y exponentes tecnológicos y por último debes hacer una evaluación de los temas mencionados anteriormente.
                                    </p>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <h2>Privacidad y Seguridad</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img
                                src="https://img2.freepng.es/20180613/yii/kisspng-computer-icons-icon-design-help-icon-5b210a9577f528.4284229615288920534914.jpg"
                                alt="100" width="100"
                            />
                            <p >
                                Nos preocupamos por la seguridad de nuestros estudiantes y docentes, por eso ofrecemos herramientas para ayudar a mantener tu cuanta segura y tu privacidad protegida.
                                    </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                <h2>Administrar tu cuenta</h2>
                <h2>Inicio de sisión y contraseña</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://img2.freepng.es/20180613/yii/kisspng-computer-icons-icon-design-help-icon-5b210a9577f528.4284229615288920534914.jpg" alt="100" width="100"
                            />
                            <p>
                                Si conoces la contraseña actual, puedes cambiarla.<br />
                        Para crear o cambiar la contraseña debes de tener en cuanta los
                        siguiqntes aspectos:
                        <ul>
                                    <li>-La contraseña debe tener 8 caracteres.</li>
                                    <li>Debe ser fácil de recordar para ti, pero difícil de adivinar para otros.</li>
                                    <li>-La contraseña de Jugando y Aprendiendo debe ser distinta
                                    de las que usas para iniciar sesión en otras cuentas, como  el
                        correo electrónico.</li>
                                </ul>
                            </p>
                        </div>
                        <br/>
                        <form action="Ajustes">
                            <input type="submit" value="Siguiente" />
                        </form>
                        <br/>
                    </div>
                </div>
            </div>

        );
    }
}
export default Ayuda;
