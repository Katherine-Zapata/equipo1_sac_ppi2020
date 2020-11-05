import React from 'react';

class Profesores extends React.Component {
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
                </nav><br/>
                <p>
                <br/>
                <br/>
                <h1> Preguntas de los temas </h1>
                <br/>
                <h2>Tema #1: Historia de la tecnología</h2>
                1. ¿En la edad media se hizo la escritura?
                <br/>
                2. ¿En la edad media se hicieron los robots?
                <br/>
                3. ¿La tecnología satisface nuestras necesisdades?
                <br/>
                4. ¿Qué es tecnología?
                <h2> Tema #2: Herramientas tecnológicas</h2>
                1. ¿La rueda es un artefacto tecnológico?
                <br/>
                2. ¿El computador es una herramienta tecnológica?
                <br/>
                3. ¿La madera es una herramienta tecnológica?
                <h2>Tema #3: Exponentes de la tecnología </h2>
                1. ¿Quién fue el creador de Facebook?
                <br/>
                2. ¿Qué astefactos tecnológicos creo Leonardo Da Vinci?
                <br/>
                3. ¿Es cierto que Jimmy Wales fue el creador de Wikipedia?
                <br/>
                4. ¿Quién fue Tim Berners-Lee?
                <br/>
                <br/>
                <h1>Posibles respuestas</h1>
                <h2>Tema #1: Historia de la tecnología</h2>
                1. Verdadero o Falso 
                <br/>
                2. Verdadero o Falso
                <h2> Tema #2: Herramientas tecnológicas</h2>
                <br/>
                1. Verdadero o Falso
                <br/>
                2. Verdadero o Falso
                <h2>Tema #3: Herramientas tecnológicas</h2>
                <br/>
                1. A) Leonardo Da Vinci
                <br/>
                B) Jimmy Wales-Lee
                <br/>
                C) Mark Zuckerberg
                <br/>
                2. A) El helicóptero 
                <br/>
                B) El puente plegable
                <br/>
                C) Los carros
                <br/>
                <br/>
                <h1>Respuestas Correctas</h1>
                <h2>Tema #1: Historia de la tecnología</h2>
                1. Verdadero  
                <br/>
                2. Falso
                <h2> Tema #2: Herramientas tecnológicas</h2>
                1. Verdadero 
                <br/>
                2. Verdadero 
                <h2>Tema #3: Herramientas tecnológicas</h2>
                1.C) Mark Zuckerberg
                <br/>
                2. B) El puente plegable
                </p>
            </div>
        )
    }
}

export default Profesores;