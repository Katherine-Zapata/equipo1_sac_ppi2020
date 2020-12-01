import React from 'react';
import { Link } from 'react-router-dom'

class LoginProfesoresPages extends React.Component {
    render() {
        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/Loginrofesores" className="btn btn-primary">
                            Login
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default LoginProfesoresPages;