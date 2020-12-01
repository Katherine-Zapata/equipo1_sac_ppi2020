import React from 'react';
import '../Components/styles/Registro.css';

class Registro extends React.Component {

    render() {
        return (
            <div className='Registro'>
                <div className='container-fluid'>
                <br/>
                <br/>
                <br/>
                    <h3>Crea una cuenta</h3>
                    <h3>¡Es fácil y rápido!</h3>
                    <br/>
                    <img src="https://image.flaticon.com/icons/png/512/13/13732.png" width="70" height="70"></img>
                    <br/>
                    <br/>
                    <form action="Login">
                        <label for="Nombre">Nombre</label>
                        <br />
                        <input type="text" name="Nombre" id="Nombre" rendonly="true" />
                        <br /><br />
                        <label for="Apellido">Apellido</label>
                        <br />
                        <input type="text" name="Apellido" id="Apellido" rendonly="true" />
                        <br /><br />
                        <label for="Correo Electrónico">Correo Electrónico</label>
                        <br />
                        <input type="text" name="Correo Electrónico" id="Correo Electrónico" />
                        <br /><br />
                        <label for="Contraseña Nueva">Contraseña Nueva </label>
                        <br />
                        <input type="text" name="Contraseña Nueva" id="Contraseña Nueva" />
                        <br /><br />
                        <label for="Sexo">Sexo</label>
                        <br />
                        <input type="text" name="Sexo" id="Sexo" placeholder="Ejemplo: F o M" />
                        <br /><br />
                        <input type="submit" value="Registrate" />
                    </form>
                    <br/>
                </div>
            </div>
            
        )
    }
}


export default Registro;