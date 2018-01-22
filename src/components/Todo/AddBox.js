import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Save from 'material-ui-icons/Save';
import { connect } from 'react-redux';
import { saveNew } from '../../store/state/tasks'

const styles = theme => ({
    container: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
    },
    menu: {
      width: '100%',
    },
});
class AddBox extends Component {
    state = {
        inputText: '',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    handleMouseDownAdd = event => {
        event.preventDefault();
    };
    
    handleClickAdd = () => {
        this.props.saveNew(this.state.inputText);
        this.setState({
            inputText: ''
        })        
    };
    
    catchReturn = (ev) => {      
      if (ev.key === 'Enter') {
        this.handleClickAdd();
        ev.preventDefault();
      }
    };  

    render() {
        const { classes } = this.props;

        return (
            <FormControl 
                className={classes.formControl}
                fullWidth >
            <InputLabel htmlFor="inputField">Add task</InputLabel>
            <Input
              id="inputField"
              autoFocus
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange('inputText')}
              onKeyPress={ this.catchReturn }
              endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={this.handleClickAdd}                    
                        onMouseDown={this.handleMouseDownAdd}
                        color="primary"
                    >
                        <Save />
                    </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )
    }
}

AddBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        saveNew: (name) => dispatch(saveNew(name))        
    }
};
  
 export default connect(null, mapDispatchToProps)(withStyles(styles)(AddBox));