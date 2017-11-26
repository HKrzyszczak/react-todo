import React, {Component} from 'react';
import Button from "./button";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Lista zadań</h1>
                <Button label='OK'/>
            </div>
        )
    }
}

export default Header
