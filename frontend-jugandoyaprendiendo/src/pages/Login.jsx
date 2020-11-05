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
                    <img src="https://img2.freepng.es/20180331/yjw/kisspng-computer-icons-user-profile-login-user-5abf1426c55235.9485280815224719748082.jpg" width="120" height="100"></img>
                    <br/>
                    <br/>
                    <form action="Profesores">
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