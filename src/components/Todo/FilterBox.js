import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      width: 200,
    },
    menu: {
      width: 200,
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

    handleChangeFilter = event => {
        this.setState({inputText: event.target.value}, this.setParentFilter)
    }
    
    handleClickClear = () => {
        this.setState({
            inputText: '',
        }, this.setParentFilter);
    };  

    setParentFilter = () => this.props.changeFilter(this.state.inputText); 
    
    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="inputField">Find</InputLabel>
            <Input
              id="inputField"
              type={'text'}
              value={this.state.inputText}
              onChange={this.handleChangeFilter}
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