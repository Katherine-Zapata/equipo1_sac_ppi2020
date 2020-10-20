import React from 'react';
import { Link } from 'react-router-dom'

class Ajustes1Pages extends React.Component {
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
                        <Link to="/ajustes1" className="btn btn-primary">
                           Ajustes #1
              </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Ajustes1Pages;