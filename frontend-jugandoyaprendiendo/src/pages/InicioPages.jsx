import React from 'react';
import { Link } from 'react-router-dom'

class InicioPages extends React.Component {
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
                        <Link to="/inicio" className="btn btn-primary">
                            Inicio
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default InicioPages;