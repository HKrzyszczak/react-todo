import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
    },
    item: {
        padding: '5%',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    },
    button: {
        margin: '10px'
    }
}

const LogIn = (props) => (
    <Grid
        style={styles.container}
        container
        alignItems={'center'}
        justify={'space-around'}
    >
        <Grid
            item
            xs={10}
            sm={8}
        >
            <Paper style={styles.item}>
                <Typography type="headline">
                    Zaloguj się!
                </Typography>
                <TextField
                    placeholder={'E-mail'}
                    type={'email'}
                    style={styles.input}
                    onChange={props.onEmailChange}
                />
                <TextField
                    placeholder={'Password'}
                    type={'password'}
                    style={styles.input}
                    onChange={props.onPassChange}
                />
                <Button
                    raised
                    color="primary"
                    style={styles.button}
                    onClick={props.onLogInClick}
                >
                    Zaloguj
                </Button>
                <Button
                    raised
                    color="accent"
                    style={styles.button}
                    onClick={props.onLogInByGoogleClick}
                >
                    Zaloguj Google+
                </Button>
            </Paper>
        </Grid>
    </Grid>
)

export default LogIn