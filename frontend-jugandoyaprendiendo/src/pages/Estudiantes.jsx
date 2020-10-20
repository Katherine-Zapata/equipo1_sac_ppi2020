import React from 'react';

class Estudiantes extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <a class="header__link" href="Registro">Registro</a>
                        </li>
                        <li>
                            <a class="header__link" href="Login">Login</a>
                        </li>
                        <a class="header__link" href="Explicación">Explicación</a>
                        <li>
                            <li>
                                <a class="header__link" href="Quiz1">Quiz #1</a>
                            </li>
                            <li>
                                <a class="header__link" href="Quiz2">Quiz #2</a>
                            </li>
                            <li>
                                <a class="header__link" href="Quiz3">Quiz #3</a>
                            </li>
                            <li>
                                <li>
                                    <a class="header__link" href="Despedida">Despedida</a>
                                </li>
                                <a class="header__link" href="Ayuda">Ayuda</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes">Ajustes</a>
                            </li>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Estudiantes;