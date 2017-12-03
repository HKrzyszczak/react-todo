import React, {Component} from 'react';
import TasksList from "./TasksList";

class Container extends Component {
    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filtrTasks = this.filtrTasks.bind(this);
        this.state = {
            task: '',
            tasks: [],
            filter: '',
        }
    }

    textChanged(event) {
        this.setState({task: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''

        });
        event.preventDefault();
    }

    filtrTasks(event) {
        this.setState({
            filter: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type='text'
                           placeholder='Search'
                           onChange={this.filtrTasks} />
                    </div>
                    <div>
                    <input type='text'
                           value={this.state.task}
                           placeholder='Add task...'
                           onChange={this.textChanged} />

                    <input type='submit'
                           value='Add' />
                    </div>
                </form>
                <h2>My tasks:</h2>
                <TasksList tasks={this.state.tasks}
                           filter={this.state.filter}
                    />
            </div>
        )
    }
}

export default Container;