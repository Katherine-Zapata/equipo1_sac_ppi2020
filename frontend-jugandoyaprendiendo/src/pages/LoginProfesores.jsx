import React from 'react';

class LoginProfesores extends React.Component {

    render() {
        return (
            <div className='Login profesores'>
                <div className='container-fluid'>
                    <br/>
                    <br/>
                    <h3>Iniciar sesión</h3>
                    <br/>
                    <img src="https://img2.freepng.es/20180331/yjw/kisspng-computer-icons-user-profile-login-user-5abf1426c55235.9485280815224719748082.jpg" width="120" height="100"></img>
                    <br/>
                    <br/>
                    <form action="PreguntasProfesores">
                        <label for="Gmail">Gmail</label>
                        <br />
                        <input type="text" name="Gmail" id="Gmail"  />
                        <br /><br />
                        <label for="Contraseña">Contraseña </label>
                        <br />
                        <input type="text" name="Contraseña" id="Contraseña" />
                        <br/>
                        <br/>
                        <input type="submit" value="Iniciar Sesión" />
                    </form>
                    <div></div>
                </div>
            </div>
        )
    }
}


export default LoginProfesores;