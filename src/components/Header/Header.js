import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SignOut from 'material-ui-icons/ExitToApp';
import { connect } from 'react-redux';
import { signOut } from '../../store/state/auth';

class Header extends Component {
  render() {
    return (
      <div>
        <Typography type="display2"
                    gutterBottom
                    align="center"
        >
          My tasks
          <IconButton
            onClick={this.props.signOut}
            onMouseDown={null}
            color="primary"
          >
            <SignOut/>
          </IconButton>
        </Typography>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch( signOut() ),
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );
