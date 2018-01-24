import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SignOut from 'material-ui-icons/ExitToApp';
import UserIco from 'material-ui-icons/AccountCircle';
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
          <div>         
          <Typography type="title"
                    gutterBottom
                    align="left">
                    <IconButton>
                    <UserIco color="primary"/>
                    </IconButton>          
          { this.props.user.displayName || this.props.user.email }
          </Typography>
          </div>
          <div>
          <Typography type="subheading"
                      gutterBottom
                      align="left"
                      onClick={this.props.signOut}>                    
          <IconButton
            onClick={this.props.signOut}
            color="primary"
          >
            <SignOut/>            
          </IconButton>
          Log out
          </Typography>
          </div>
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
