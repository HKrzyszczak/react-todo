import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ToDo from "./Todo";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';

const styles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 500,
      },
    
  });

const App = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}
            align="center">
        <CardContent align="center">
                <Header/>
                <ToDo />                
                <Footer/>
        </CardContent>
        </Card>
    )
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(App);
