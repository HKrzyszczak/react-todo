import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import { database } from '../../firebase/firebase';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});
class TasksList extends React.Component {
  state = {
    checked: [0],
  };

  

  handleDelete = (id) => {
    database.ref('/tasks/' + id)
          .remove()
        };

  handleCheck = (task) => {
    database.ref('/tasks/' + task.id)
          .set({
                name: task.name,
                checked: !task.checked,
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {this.props.tasks                
            .map(task => (
            <ListItem
              key={task.id}
              dense
              button
              onClick={null}
              className={classes.listItem}
            >
              <Checkbox
                checked={task.checked}
                onClick={() => this.handleCheck(task)}                
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={task.name}
                            style={task.checked?{textDecoration: 'line-through', fontSize: 20}:{fontSize: 20} } />
              <ListItemSecondaryAction>
                <IconButton 
                  aria-label='Delete'
                  onClick={() => this.handleDelete(task.id)}
                >
                  <DeleteIcon color= 'primary'/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
TasksList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TasksList);