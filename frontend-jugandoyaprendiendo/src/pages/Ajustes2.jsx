import React from 'react';

class Ajustes2 extends React.Component {
    render() {
        return (
            <div className='Ajustes2'>
                <div className='Ajuestes_header'>
                    <br />
                    <p>
                        <br />
                        <br /><h1>Ajustes</h1>
                        <br />
                        <img src="https://image.flaticon.com/icons/png/512/240/240847.png" width="100" height="100"></img>
                        <br />
                        <br />
                        <h2>Cambiar usuario</h2>
                        <br />
                        <form>
                            <label for="Correo electrónico actual">Correo electrónico actual</label>
                            <br />
                            <input type="text" name="Correo electrónico actual" id="Correo electrónico actual" />
                            <br /><br />
                            <label for="Agregar Correo electrónico">Agregar Correo electrónico</label>
                            <br />
                            <input type="text" name="Agregar Correo electrónico" id="Agregar Correo electrónico" />
                            <br /><br />
                            <input type="submit" value="Guardar Cambios" />
                            <br />
                            <br />
                            <input type="submit" value="Cancelar" />
                        </form>
                        <br/>
                        <form action="Inicio">
                            <input type="submit" value="Salir" />
                        </form>
                    </p>
                </div>
            </div>
        )
    }
}

export default Ajustes2;