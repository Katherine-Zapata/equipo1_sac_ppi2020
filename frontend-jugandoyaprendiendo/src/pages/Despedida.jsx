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
                        </ul>
                    </nav>
                    <br/>
                    <br/>
                        <br/><h2> ¡Gracias por jugar! </h2>
                        <h2> Vuelve cuando quieras</h2>
                        <button onClick="Inicio">Salir</button>
                </div>

            </div>
        )
    }
}

export default Despedida;