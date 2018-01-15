import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Clear from 'material-ui-icons/Clear';
import { database } from '../../firebase/firebase';
import EditBox from './EditBox';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


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

  handleDelete = (id) => {
    database.ref('/tasks/' + id)
          .remove()
        };
  
  

  handleCheck = (task, e) => {
    e.preventDefault()
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    database.ref('/tasks/' + task.id)
          .set({
                name: task.name,
                checked: !task.checked,
                timeStamp: task.timeStamp,
          })
          .then(() => {
            console.log('Saved :-)');
        })
        .catch(() => console.log('ERROR! Nothing saved!!!'))
        };
  
  handleInlineEdit = (idEditedField) => {
    this.setState({
      idEditedField: idEditedField, 
    })
  }

  returnEditOrText = (task) => {
    let dateFromTask =new Date(task.timeStamp);
    let dateString = dateFromTask.getFullYear() + '-' + (dateFromTask.getMonth() + 1) + '-' + dateFromTask.getDate();
    let timeString = dateFromTask.getHours() + ':' + dateFromTask.getMinutes() + ':' + dateFromTask.getSeconds();
    let dateTimeString = dateString + ' ' + timeString;
    return  this.state.idEditedField !== task.id?(
      <Grid xs={12}>
        <ListItemText primary={task.name}
                            style={task.checked?{textDecoration: 'line-through', fontSize: 20}:{fontSize: 20} } />
        <Typography 
              gutterBottom
              align="left"
              style={{fontSize: 10, color: 'blue' }}
        >{dateTimeString}</Typography>
      </Grid>
                            
    ):( <EditBox 
        task={task}
        resetEditId={this.resetIdEditedField}
       />)
  }

  returnClearOrDelete = (task) => {
    return this.state.idEditedField !== task.id?(
      <IconButton 
                  aria-label='Delete'
                  onClick={() => this.handleDelete(task.id)}
                >
                  <DeleteIcon color= 'primary'/>
                </IconButton>
    ):(
      <IconButton 
                  aria-label='Clear'
                  onClick={this.resetIdEditedField}
                >
                  <Clear color= 'primary'/>
                </IconButton>
    )
  }

  resetIdEditedField = () => {
    this.setState({
      idEditedField: '',
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid xs={12}>
        <List align="left">
          {this.props.tasks                
            .map(task => (
            <ListItem
              key={task.id}
              dense
              button
              onDoubleClick={() => this.handleInlineEdit(task.id)}
              className={classes.listItem}
            >
              <Checkbox
                checked={task.checked}
                onClick={(e) => this.handleCheck(task, e)}                               
                tabIndex={-1}
                disableRipple
              />
              { this.returnEditOrText(task) }              
              <ListItemSecondaryAction>
                {this.returnClearOrDelete(task)}                
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  }
}
TasksList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TasksList);