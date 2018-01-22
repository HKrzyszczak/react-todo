import {
    database
} from '../../firebase/firebase';
import firebase from 'firebase';
import {
    showNotification
} from './notyfication'

const SET = 'tasks/SET'
const UPDATE = 'tasks/UPDATE'
const SAVE_NEW = 'tasks/SAVE_NEW'

const initialState = {
    tasks: []
}

const set = (tasks) => {
    return {
        type: SET,
        tasks
    }
}

export const save = (task) => {
    return {
        type: UPDATE,
        task
    }
}

export const deleteTask = (id) => (dispatch, getState) => {
    database.ref(`/tasks/${id}`)
        .remove()
        .then(() => dispatch(showNotification('Deleted :-(')))
        .catch(() => dispatch(showNotification('ERROR! Nothing deleted!!!')))
}

export const saveNew = (name) => (dispatch, getState) => {
    database.ref('/tasks')
        .push({
            name,
            checked: false,
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
        })
        .then(() => dispatch(showNotification('Saved :-)')))
        .catch(() => dispatch(showNotification('ERROR! Nothing saved!!!')))
}

export const init = () => (dispatch) => {
    database.ref('/tasks')
        .on('value', (snapshot) => {
            let items = snapshot.val();
            let newTasks = [];
            for (let item in items) {
                const {
                    name,
                    checked,
                    timeStamp
                } = items[item];
                newTasks.unshift({
                    id: item,
                    name,
                    checked,
                    timeStamp
                });
            }
            dispatch(set(newTasks))
        })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                tasks: action.tasks
            }
        case UPDATE:
            return {
                ...state,
                task: action.task
            }
        case SAVE_NEW:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}