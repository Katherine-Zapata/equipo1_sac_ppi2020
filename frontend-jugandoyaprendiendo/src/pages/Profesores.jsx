import React from 'react';

class Profesores extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <li>
                                <li>
                                    <a class="header__link" href="Registro">Registro</a>
                                </li>
                                <li>
                                    <a class="header__link" href="Login">Login</a>
                                </li>
                                <a class="header__link" href="Menu">Menú</a>
                            </li>
                            <a class="header__link" href="Inicio">Inicio</a>
                        </li>
                        <li>
                            <a class="header__link" href="Pregunta">Pregunta #1</a>
                        </li>
                        <li>
                            <a class="header__link" href="Pregunta2">Pregunta #2</a>
                        </li>
                        <li>
                            <a class="header__link" href="Preguntas">Preguntas #3</a>
                        </li>
                        <li>
                            <a class="header__link" href="Descarga">Descarga</a>
                        </li>
                        <li>
                            <a class="header__link" href="Ayuda">Ayuda</a>
                        </li>
                        <li>
                            <a class="header__link" href="Ajustes">Ajustes</a>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Profesores;