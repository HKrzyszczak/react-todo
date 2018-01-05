import React, {Component} from 'react';
import AddBox from './AddBox.js';
import { database } from "../../firebase/firebase";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                
            ],
            cos: [
                1, 2, 3
            ]
        }
    }
    componentDidMount() {
        database.ref('/tasks')
            .on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                  newState.push({
                    id: item,
                    name: items[item].name,
                    
                  });
                }
                this.setState({
                  tasks: newState});
            });
    };
    render() {
        return (
            <div>
                <h2>My to Do list</h2>
                <ol>
                    {this.state.tasks.map((tasks) => {
                      return  (<div>
                          <li key={tasks.id}>{tasks.name}</li>
                          
                          </div>
                      )
                    })}
                </ol>
                
                <AddBox />
            </div>
        );
    }
}

export default ToDo;
