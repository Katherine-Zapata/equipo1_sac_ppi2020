import React from 'react';
import { Link } from 'react-router-dom'

class Quiz3Pages extends React.Component {
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
                        <Link to="/Quiz3" className="btn btn-primary">
                            Quiz #3
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default Quiz3Pages;