import React from 'react';
import ReactPlayer from 'react-player';

class Explicación extends React.Component {
    render() {
        return (

            <div className='Explicación'>
                <div className='Explicación_header'>
                    <br />
                    <nav>
                        <ul>
                            <li>
                                <a class="header__link" href="Menu">Menú</a>
                            </li>
                            <li>
                                <a class="header__link" href="Inicio">Inicio</a>
                            </li>
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
                                <a class="header__link" href="Ayuda">Ayuda</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes">Ajustes</a>
                            </li>

                        </ul>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <p>
                        <h1>Explicación de los temas</h1>
                        <br />
                        <h2>1. Historia de la tecnología</h2>
                        La historia de la tecnología es la herramienta de la invención de
                        herramientas y ténicas con un propósito prático.En este nivel evaluaremos la
                        evolución de la historia de la tecnología a través de la historia.
                        <br />
                        <br />
                        {/* <ReactPlayer url="https://www.youtube.com/watch?v=8gYS1TJXVes&t=8s" controls /> */}
                        <center> <ReactPlayer url={require('../Components/historia.mp4')} controls /></center>
                        <br />
                        <br />
                        <h2>2. Herramientas Tecnológicas</h2>
                            Están diseñadas para failitar el trabajo y permitir que los recursos
                            sean aplicados eficientemente intercambiando información y conocimiento
                            dentro y fuera de las organizaciones.<br />
                            En este nivel evaluaremos sobre algunas herramientas tecnoológicas.
                            <br />
                        <br />
                        <center><ReactPlayer url={require('../Components/herramientas.mp4')} controls /></center>

                        <br />
                        <br />
                        <h2>3. Exponentes Tecnológicos</h2>
                            Exponer es un verbo que hace referencia a presentar algo o darlo a conocer.
                            Como exponentes tecnológicos tenemos: Larry Page y Sergey Brin fundadores de Goolge; Mark Zuckerberg creador de Facebook; Jimmy Wales autor de Wikipedia,
                            entre otros. <br />
                            En este nivel evaluaremos lo que saben sobre algunos
                            exponentes tecnoológicos.
                            <br />
                        <br />
                        <center><ReactPlayer url={require('../Components/exponentes.mp4')} controls /></center>
                    </p>

                </div>
            </div>
        )
    }
}

export default Explicación;