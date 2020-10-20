import React from 'react';
import '../Components/styles/Inicio.css'

class Inicio extends React.Component {
    render() {
        return (

            <div>
                <nav>
                    <br />
                    <ul>
                        <li>
                            <a class="header__link" href="Explicación">Bienvenida</a>
                        </li>
                        <li>
                            <a class="header__link" href="Registro">Registro</a>
                        </li>
                        <li>
                            <a class="header__link" href="Login">Login</a>
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

                <br />
                <br />
                <br /><h1>Inicio</h1>
                <br />
                <p>
                    <h2>¿Qué es Jugando y Aprendiendo?</h2>
                    Es un aplicativo web móvil a la disposición
                    de los niños y niñas de la Institución
                    Educativa Santos Ángeñeles Custodios, para los
                    grados de tercero a quinto de primaria, con el
                    objetivo de evaluar los temas de la historia,
                    herramientas y exponentes tecnológicos.

                            </p>
                <br />

                <img className="izquierda" src="https://www.wikiduca.com/images/easyblog_articles/950/b2ap3_thumbnail_juego-de-matematicas-juegos-para-pc-wikiduca.jpg" width="350" height="350"></img>

                <img className="derecha" src="https://elpais.com/tecnologia/imagenes/2018/05/02/actualidad/1525254086_542545_1525701047_noticia_fotograma.jpg " width="350" height="350"></img>
            </div>

        )
    }
}

export default Inicio;