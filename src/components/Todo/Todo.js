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
            fiterText: '',
           
        }
    }
    componentDidMount() {
        database.ref('/tasks')
            .on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                  newState.unshift({
                    id: item,
                    name: items[item].name,
                    checked: items[item].checked,
                  });
                }
                this.setState({
                  tasks: newState});
            });
    };

    setFilterText = (fiterText) => {
        this.setState({fiterText: fiterText})
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
                <FilterBox changeFilter={this.setFilterText}/>
                </div>
                <TasksList 
                    tasks = {this.state.tasks.filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)} />
            </div>
        );
    }
}

export default ToDo;
