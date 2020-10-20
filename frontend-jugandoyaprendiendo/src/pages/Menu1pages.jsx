import React from 'react';
import { Link } from 'react-router-dom'


class Menu1Pages extends React.Component {
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
                        <Link to="/menu1" className="btn btn-primary">
                            Menú #1
              </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default Menu1Pages;