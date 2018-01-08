import React, {Component} from 'react';
import Typography from 'material-ui/Typography';

class Footer extends Component {
    render() {
        return (
            <Typography type="body2" 
                        gutterBottom
                        align="center"
                        >
                &copy; Henryk Krzyszczak
            </Typography>               
        )
    }
}

export default Footer;