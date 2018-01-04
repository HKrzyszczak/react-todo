import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                'Nauczyć się do testu',
                'Zjeść śniadanie',
                'Inne'
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>My to Do list</h2>
                <ol>
                    {this.state.tasks.map((task, index) => {
                      return  (<div>
                          <li key={index}>{task}</li>
                          </div>
                      )
                    })}
                </ol>
            </div>
        );
    }
}

export default ToDo;