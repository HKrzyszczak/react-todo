import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
            this.handleHange = this.handleHange.bind(this);
            this.state= {
                checked: false
            }
    }

     handleHange(event) {
        this.setState({
            checked: event.target.checked
        });
    }

    renderLabel() {
        if (this.state.checked) {
            return(
                <span style={{textDecoration: 'line-through'}}>
                    {this.props.label}
                    </span>
            );
        }
        return this.props.label;
    }

    render() {
        return (
                <div>
                    <label>
                        <input type='checkbox'
                               value={this.props.label}
                               key={this.props.key}
                               onChange={this.handleHange}
                        />
                        {this.renderLabel()}</label>
                </div>
        )
    }
}

export default Task;