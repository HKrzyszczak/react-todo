import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Clear from 'material-ui-icons/Clear';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 250,
    },
    menu: {
      width: 250,
    },
  });

class FilterBox extends Component {
    state = {
        inputText: '',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    handleMouseDownAdd = event => {
        event.preventDefault();
    };
    
    handleClickClear = () => {
        this.setState({
            inputText: '',
        });
    };  

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="inputField">Add task</InputLabel>
            <Input
              id="inputField"
              type={ 'text' }
              value={this.state.inputText}
              onChange={this.handleChange('inputText')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickClear}
                    onMouseDown={this.handleMouseDownAdd}
                  >
                     <Clear color="primary"/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )
    }
}

FilterBox.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FilterBox);