import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SvgIcons from './SvgIcons';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '70%',
  },
};

type
ProvidedProps = {
  classes: Object,
  theme? : Object,
};

function Footer(props: ProvidedProps) {

  return (
    <Grid>
      <Typography type="body2"
                  gutterBottom
                  align="center"
      >
        &copy; Henryk Krzyszczak

      </Typography>

      <SvgIcons/>
    </Grid>
  )

}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles( styles )( Footer );
