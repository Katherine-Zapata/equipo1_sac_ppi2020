import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className='Bienvenida'>
                <div className='container-fluid'>
                    <br/>
                    <br/>
                    <h3>¡Bienvenid@s!</h3>
                    <br/>
                    <h3>Iniciar sesión</h3>
                    <br/>
                    <img src="https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png" width="100" height="100"></img>
                    <br/>
                    <br/>
                    <form>
                        <label for="Gmail">Gmail: (Campo Obligatorio)</label>
                        <br />
                        <input type="text" name="Gmail" id="Gmail" required />
                        <br /><br />
                        <label for="Contraseña">Contraseña: (Campo Obligatorio) </label>
                        <br />
                        <input type="text" name="Contraseña" id="Contraseña" required />
                        <br/>
                        <br/>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;