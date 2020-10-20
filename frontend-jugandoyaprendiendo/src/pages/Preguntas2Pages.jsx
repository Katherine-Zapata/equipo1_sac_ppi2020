import React from 'react';
import { Link } from 'react-router-dom'

class Preguntas2Pages extends React.Component {
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
                        <Link to="/preguntas2" className="btn btn-primary">
                            Preguntas #2
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default Preguntas2Pages;