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
          Log in to Your Todo!
        </Typography>
        <Typography type="headline">
          Test user: demo@demo.pl pass: 123456
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
        <div>
          <Button
            raised
            color="primary"
            style={styles.button}
            onClick={props.onLogInClick}
          >
            Log in
          </Button>
          
        </div>
        <div>or</div>
        <div>
          <Button
            raised
            color="primary"
            style={styles.button}
            onClick={props.onLogInByGoogleClick}
          >
            Log In by Google+
          </Button>
        </div>
      </Paper>
    </Grid>
  </Grid>
)

export default LogIn