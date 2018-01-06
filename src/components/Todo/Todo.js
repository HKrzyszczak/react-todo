import React, {Component} from 'react';
import AddBox from './AddBox.js';
import { database } from "../../firebase/firebase";
import TasksList from './TasksList';
import FilterBox from './FilterBox';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
           
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
                    checked: items[item].checked,
                    
                  });
                }
                this.setState({
                  tasks: newState});
            });
    };

    handleToggleCheck = (id, checked) => {
        database.ref('/tasks/' + id)
        .set({
              checked: !checked,
        })
        .then(() => {
          console.log('Saved :-)');
          this.setState({
              inputText: '',
          })
      })
      .catch(() => console.log('ERROR! Nothing saved!!!'))
      };

    render() {
        return (
            <div>
                <div>                       
                <AddBox />
                </div>
                <div>
                <FilterBox />
                </div>
                <TasksList tasks = {this.state.tasks} toggleCheck= {this.handleToggleCheck} />
            </div>
        );
    }
}

export default ToDo;
