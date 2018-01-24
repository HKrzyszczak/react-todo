import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import ToDo from "../Todo";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';

const styles = theme => ({
  card: {
    width: '100vw'
  } 
});

const Inside = (props) => {
  const { classes } = props;
  return (
    <Grid
      container
      justify="center"
    >
      <Card
        className={classes.card}
        align="center">
        <CardContent align="center">
          <Header/>
          <ToDo/>
          <Footer/>
        </CardContent>
      </Card>
    </Grid>
  )
};

Inside.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.loadingReducer.isLoading
});

export default connect(
  mapStateToProps
)( withStyles( styles )( Inside ) );