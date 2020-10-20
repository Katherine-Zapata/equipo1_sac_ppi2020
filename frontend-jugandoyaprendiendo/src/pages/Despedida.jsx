import React from 'react';
import '../Components/styles/Inicio.css'

class Despedida extends React.Component {
    render() {
        return (
            <div className='Despedida'>
                <div className='Despedida_header'>
                    <nav>
                        <ul>
                            <li>
                                <a href="Inicio">Inicio</a>
                            </li>
                            <li>
                                <a class="header__link" href="Progreso">Progreso</a>
                            </li>
                            <li>
                                <a class="header__link" href="Explicación">Explicación</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ayuda">Ayuda</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes">Ajustes</a>
                            </li>
                        </ul>
                    </nav>
                        <h2> ¡Gracias por jugar! </h2>
                        <h2> Vuelve cuando quieras</h2>
                        <button>Salir</button>
                </div>

            </div>
        )
    }
}

export default Despedida;