import React, {Component} from 'react';
import Button from "./Button";
import { Link } from 'react-router-dom';
import Search from "./Serch";

class Header extends Component {
    render() {
        return (
            <div>
                <Search/>
                <h1>Lista zadań</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">Lista zadan</Link></li>
                    <li><Link to="/counter">Licznik</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/users">Users</Link></li>

                </ul>
                <Button label='OK'/>
            </div>
        )
    }
}

export default Header;
