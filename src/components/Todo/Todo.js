import React, { Component } from 'react';
import AddBox from './AddBox.js';
import TasksList from './TasksList';
import FilterBox from './FilterBox';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { init as initTasksListening } from '../../store/state/tasks';

class ToDo extends Component {
  constructor(props) {
    super( props );
    this.state = {
      tasks: [],
      fiterText: '',

    }
  }

  componentWillMount() {
    initTasksListening()
  }

  setFilterText = (fiterText) => {
    this.setState( { fiterText: fiterText } )
  }

  render() {
    return (
      <Grid>
        <Grid>
          <AddBox/>
        </Grid>
        <Grid>
          <FilterBox changeFilter={this.setFilterText}/>
        </Grid>
        <TasksList
          tasks={this.props.tasks.filter( el => el.name.toUpperCase().search( this.state.fiterText.toUpperCase() ) !== -1 )}/>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
  initTasksListening: dispatch( initTasksListening() )
});
export default connect( mapStateToProps, mapDispatchToProps )( ToDo );
