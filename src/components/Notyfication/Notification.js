import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';

import { hideNotification } from '../../store/state/notyfication';

const mapStateToProps = (state) => ({
  open: state.notificationReducer.notifications.open,
  message: state.notificationReducer.notifications.message,
  autoHideDuration: 3000
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(hideNotification())
});

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const Notification = (props) => (
  <Snackbar
    open={props.open}
    message={props.message}
    autoHideDuration={props.autoHideDuration}
    onClose={props.handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={props.classes.close}
        onClick={props.handleClose}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notification)
);
