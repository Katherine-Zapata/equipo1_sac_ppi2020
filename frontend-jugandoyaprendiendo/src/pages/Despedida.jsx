import React from 'react';
import ReactPlayer from 'react-player';
import '../Components/styles/Inicio.css'

class Despedida extends React.Component {
    render() {
        return (
            <div className='Despedida'>
                <div className='Despedida_header'>
                    <br />
                    <h2> ¡Gracias por jugar! </h2>
                    <h2> Vuelve cuando quieras</h2>
                    <br/>
                     <center><ReactPlayer url={require('../Components/adios.mp4')} controls width="100%" height="100%"/></center>
                    <br/>
                    <form action="Inicio">
                        <input type="submit" value="Salir" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Despedida;
