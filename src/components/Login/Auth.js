import React, { Component } from 'react'

import { connect } from 'react-redux'
import { logIn, logInByGoogle } from '../../store/state/auth'

import LogIn from './LogIn'

class Auth extends Component {
    state = {
        email: '',
        pass: ''
    }

    render() {
        return (
            <div>
                {
                    this.props.user ?
                        this.props.children
                        :
                        <LogIn
                            onEmailChange={(e) => this.setState({ email: e.target.value })}
                            onPassChange={(e) => this.setState({ pass: e.target.value })}
                            onLogInClick={() => this.props.logIn(this.state.email, this.state.pass)}
                            onLogInByGoogleClick={this.props.logInByGoogle}
                        />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
    logIn: (email, pass) => dispatch(logIn(email, pass)),
    logInByGoogle: () => dispatch(logInByGoogle())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)