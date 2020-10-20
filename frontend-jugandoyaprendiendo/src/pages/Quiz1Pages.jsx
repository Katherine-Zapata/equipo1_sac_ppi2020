import React from 'react';
import { Link } from 'react-router-dom'

class Quiz1Pages extends React.Component {
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
                        <Link to="/Quiz1" className="btn btn-primary">
                            Quiz #1
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default Quiz1Pages;