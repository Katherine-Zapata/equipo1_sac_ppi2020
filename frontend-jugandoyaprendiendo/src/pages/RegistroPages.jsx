import React from 'react';
import { Link } from 'react-router-dom'

class Registro1Pages extends React.Component {
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
                        <Link to="/registro1" className="btn btn-primary">
                            Registro
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default Registro1Pages;