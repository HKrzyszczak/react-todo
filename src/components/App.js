import React from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Auth from './LogIn/Auth';
import LoadingIndicator from './LoadingIndicator'
import Inside from './Inside';
import Notification from './Notyfication/Notification';

const App = (props) => {
  return (
    <Grid
      container
      justify="center"
    >
      <LoadingIndicator isLoading={props.isLoading}/>
      <Auth>
        <Inside/>
        <Notification/>
      </Auth>
    </Grid>
  )
};

const mapStateToProps = state => ({
  isLoading: state.loadingReducer.isLoading
});

export default connect(
  mapStateToProps
)( App );
