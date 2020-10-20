import React from 'react';
import { Link } from 'react-router-dom'

class LoginPages extends React.Component {
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
                        <Link to="/login" className="btn btn-primary">
                            Login
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default LoginPages;