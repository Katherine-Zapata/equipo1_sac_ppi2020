import React from 'react';
import { Link } from 'react-router-dom'

class DescargarPages extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
            
        }
    }
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
                        <Link to="/descargar" className="btn btn-primary">
                            Descarga
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default DescargarPages;