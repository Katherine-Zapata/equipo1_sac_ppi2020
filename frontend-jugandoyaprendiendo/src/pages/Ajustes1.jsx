import React from 'react';

class Ajustes1 extends React.Component {
    render() {
        return (
            <div className='Ajustes1'>
                <div className='Ajuestes_header'>
                    <nav>
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
                                <a class="header__link" href="Ajustes">Ajustes</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes2">Ajustes #2</a>
                            </li>
                        </ul>
                    </nav>
                    <br/>
                    <br />
                    <p>
                        <br /><h1>Ajustes</h1>
                        <br />
                        <img src="https://image.flaticon.com/icons/png/512/240/240847.png" width="100" height="100"></img>
                        <br />
                        <br />
                        <h2>Cambiar contraseña</h2>
                        <br />
                        <form>
                            <label for="Contraseña actual">Contraseña actual</label>
                            <br />
                            <input type="text" name="Contraseña actual" id="Contraseña actual" required />
                            <br /><br />
                            <label for="Contraseña nueva">Contraseña nueva</label>
                            <br />
                            <input type="text" name="Contraseña nueva" id="Contraseña nuevao" required />
                            <br /><br />
                            <label for="Repetir contraseña nueva">Repetir contraseña nueva</label>
                            <br />
                            <input type="text" name="Repetir contraseña nueva" id="Repetir contraseña nueva" required />
                            <br /><br /><br/>
                            <input type="submit" value="Guardar Cambios" />
                            <br />
                            <br />
                            <input type="submit" value="Cancelar" />
                        </form>
                    </p>
                </div>
            </div>
        )
    }
}

export default Ajustes1;