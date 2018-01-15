import { auth, googleProvider } from '../firebase'
import { startLoading, stopLoading } from './loading'

const SET_USER_DATA = 'add/SET_USER_DATA'

const setUserData = (user) => ({
    type: SET_USER_DATA,
    payload: {
        user
    }
})

export const init = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user) => {
        dispatch(setUserData(user))
    })
}

export const logIn = (email, password) => (dispatch, getState) => {
    dispatch(startLoading())
    auth.signInWithEmailAndPassword(email, password)
        .then(() => dispatch(stopLoading()))
        .catch((e) => alert('Coś poszło nie tak podczas logowania!'))
}

export const logInByGoogle = () => (dispatch, getState) => {
    dispatch(startLoading())
    auth.signInWithPopup(googleProvider)
        .then(() => dispatch(stopLoading()))
}

export const signOut = () => (dispatch, getState) => {
    dispatch(startLoading())
    auth.signOut()
        .then(() => dispatch(stopLoading()))
}

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}