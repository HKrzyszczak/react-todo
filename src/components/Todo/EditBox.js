import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Save from 'material-ui-icons/Save';
import { database } from "../../firebase/firebase";

import { connect } from 'react-redux';
import { saveNew } from '../../store/state/tasks'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: '80%',
  },
});

class EditBox extends Component {
  state = {
    inputText: '',
    task: [],
  };

  handleChange = prop => event => {
    this.setState( { [prop]: event.target.value } );
  };

  handleMouseDownAdd = event => {
    event.preventDefault();
  };

  componentDidMount() {
    this.setState( {
      inputText: this.props.task.name,
      task: this.props.task,
    } )
  }

  handleClickSave = () => {
    if ( this.state.inputText.length > 0 ) {
      database.ref( '/tasks/' + this.state.task.id )
        .set( {
          name: this.state.inputText,
          checked: this.state.task.checked,
          timeStamp: this.state.task.timeStamp,
        } )
        .then( () => {
          console.log( 'Saved :-)' );
          this.props.resetEditId();
        } )
        .catch( () => console.log( 'ERROR! Nothing saved!!!' ) )
    }
  };

  catchReturn = (ev) => {
    if ( ev.key === 'Enter' ) {
      this.handleClickSave();
      ev.preventDefault();
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl
        className={classes.formControl}
        fullWidth
      >
        <InputLabel htmlFor="inputField">Rename task</InputLabel>
        <Input
          id="inputField"
          type="text"
          autoFocus
          value={this.state.inputText}
          onChange={this.handleChange( 'inputText' )}
          onKeyPress={this.catchReturn}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={this.handleClickSave}
                onMouseDown={this.handleMouseDownAdd}
                color="primary"
              >
                <Save/>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    )
  }
}

EditBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withStyles( styles )( EditBox ) );