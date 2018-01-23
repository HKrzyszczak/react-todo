import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Clear from 'material-ui-icons/Clear';
import EditBox from './EditBox';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { deleteTask, setTaskToUpdate, clearTaskToUpdate, toggleCheck } from '../../store/state/tasks'

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});

class TasksList extends React.Component {
  state = {
    idEditedField: '',
  };

  handleInlineEdit = (task) => {
    this.props.setTaskToUpdate(task)   
  };

  returnEditOrText = (task) => {
    let dateFromTask = new Date( task.timeStamp );
    let dateString = dateFromTask.getFullYear() + '-' + (dateFromTask.getMonth() + 1) + '-' + dateFromTask.getDate();
    let timeString = dateFromTask.getHours() + ':' + dateFromTask.getMinutes() + ':' + dateFromTask.getSeconds();
    let dateTimeString = dateString + ' ' + timeString;
    return this.props.taskToUpdate.id !== task.id ? (
      <Grid>
        <ListItemText primary={task.name}
                      style={task.checked ? { textDecoration: 'line-through', fontSize: 20 } : { fontSize: 20 }}/>
        <Typography
          gutterBottom
          align="left"
          style={{ fontSize: 10, color: 'blue' }}
        >{dateTimeString}</Typography>
      </Grid>

    ) : ( <EditBox
      task={this.props.taskToUpdate}
      resetEditId={this.props.clearTaskToUpdate}
    />)
  };

  returnClearOrDelete = (task) => {
    return (this.props.taskToUpdate.id !== task.id) ? (
      <IconButton
        aria-label='Delete'
        onClick={() => this.props.deleteTask( task.id )}
      >
        <DeleteIcon color='primary'/>
      </IconButton>
    ) : (
      <IconButton
        aria-label='Clear'
        onClick={() => this.props.clearTaskToUpdate()}
      >
        <Clear color='primary'/>
      </IconButton>
    )
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <List align="left">
          {this.props.tasks
            .map( task => (
              <ListItem
                key={task.id}
                dense
                button
                onDoubleClick={() => this.handleInlineEdit( task )}
                className={classes.listItem}
              >
                <Checkbox
                  checked={task.checked}
                  onClick={() => this.props.toggleCheck( task )}
                  tabIndex={-1}
                  disableRipple
                />
                {this.returnEditOrText( task )}
                <ListItemSecondaryAction>
                  {this.returnClearOrDelete( task )}
                </ListItemSecondaryAction>
              </ListItem>
            ) )}
        </List>
      </Grid>
    );
  }
}

TasksList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    taskToUpdate: state.tasksReducer.taskToUpdate
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (id) => dispatch( deleteTask( id ) ),
    setTaskToUpdate: (task) => dispatch(setTaskToUpdate(task)),
    clearTaskToUpdate: () => dispatch(clearTaskToUpdate()),
    toggleCheck: (task) => dispatch(toggleCheck(task))
  }
};

export default connect( 
  mapStateToProps, 
  mapDispatchToProps )( withStyles( styles )( TasksList ) );