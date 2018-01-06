import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Lista zadań</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>               
            </div>
        )
    }
}

export default Header;
