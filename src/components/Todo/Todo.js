import React, {Component} from 'react';
import AddBox from './AddBox.js';
import { database } from "../../firebase/firebase";
import TasksList from './TasksList';
import FilterBox from './FilterBox';
import Grid from 'material-ui/Grid';

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
                    timeStamp: items[item].timeStamp,
                  });
                }
                this.setState({
                  tasks: newState});
            });
    };

    setFilterText = (fiterText) => {
        this.setState({fiterText: fiterText})
    };    

    render() {
        return (
            <Grid xs={12}>
                <Grid xs={12}>                       
                <AddBox />
                </Grid>
                <Grid xs={12}>
                <FilterBox changeFilter={this.setFilterText}/>
                </Grid>
                <TasksList 
                    tasks = {this.state.tasks.filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)} />
            </Grid>
        );
    }
}

export default ToDo;
