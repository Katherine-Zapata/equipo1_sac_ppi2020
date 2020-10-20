import React from 'react';

class Ajustes extends React.Component {
    render() {
        return (
            <div className='Ajustes'>
                <div className='Ajuestes_header'>
                    <nav>
                        <br />
                        <ul>
                            <li>
                                <a class="header__link" href="Inicio">Inicio</a>
                            </li>
                            <li>
                                <a class="header__link" href="Explicación">Explicación</a>
                            </li>
                            <li>
                                <a class="header__link" href="Progreso">Progreso</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ayuda">Ayuda</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes1">Ajustes #1</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes2">Ajustes #2</a>
                            </li>
                        </ul>
                    </nav>
                    <p>
                        <br />
                        <br />
                        <br/>
                        <h1>Ajustes</h1>
                        <br />
                        <img src="https://image.flaticon.com/icons/png/512/240/240847.png" width="100" height="100"></img>
                        <br />
                        <br />
                        <h2>Información personal</h2>
                        Actualiza tu nombre y dirección de correo electrónico
                        <br />
                        <form>
                            <label for="Nombre">Nombre</label>
                            <br />
                            <input type="text" name="Nombre" id="Nombre" required />
                            <br /><br />
                            <label for="Correo electrónico">Correo electrónico</label>
                            <br />
                            <input type="text" name="Correo electrónico" id="Correo electrónico" required />
                            <br /><br />
                            <label for="Contraseña">Contraseña</label>
                            <br />
                            <input type="text" name="Contraseña" id="Contraseña" required />
                            <br /><br />
                            <input type="submit" value="Cambiar" />
                        </form>

                    </p>
                    <br />

                </div>
            </div>
        )
    }
}

export default Ajustes;