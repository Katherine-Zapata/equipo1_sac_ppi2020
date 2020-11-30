import React from 'react';
import '../Components/styles/Inicio.css'

class Despedida extends React.Component {
    render() {
        return (
            <div className='Despedida'>
                <div className='Despedida_header'>
                    <br />
                    <h2> ¡Gracias por jugar! </h2>
                    <h2> Vuelve cuando quieras</h2>
                    <form action="Inicio">
                        <input type="submit" value="Salir" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Despedida;
