import React from 'react';
import './styles/navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='container-fluid'>
                    <a className='Navbar__brand'>
                        <span className='font-weight-light'>
                            <nav>
                                <ul>
                                <li>
                                        <a class="header__link" href="Inicio">Inicio</a>
                                    </li>
                                    <li>
                                        <a class="header__link" href="Registro">Registro</a>
                                    </li>
                                    <li>
                                        <a class="header__link" href="Login">Login</a>
                                    </li>
                                    <li>
                                        <a class="header__link" href="Estudiantes">Estudiantes</a>
                                    </li>
                                    <li>
                                        <a class="header__link" href="PreguntasProfesores">Profesores</a>
                                    </li>
                                </ul>
                            </nav>
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;