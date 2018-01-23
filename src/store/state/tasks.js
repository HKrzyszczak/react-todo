import { database, auth } from '../../firebase/firebase';
import firebase from 'firebase';
import { showNotification } from './notyfication'
import { startLoading, stopLoading } from './loading'

const SET = 'tasks/SET'
const UPDATE = 'tasks/UPDATE'
const SAVE_NEW = 'tasks/SAVE_NEW'
const SET_TASK_TO_UPDATE = 'tasks/SET_TASK_TO_UPDATE'
const CLEAR_TASK_TO_UPDATE = 'tasks/CLEAR_TASK_TO_UPDATE'

const initialState = {
  tasks: [],
  taskToUpdate: {
    id: ''
  }
}

const set = (tasks) => {
  return {
    type: SET,
    tasks
  }
}

export const setTaskToUpdate = (task) => {
  return {
    type: SET_TASK_TO_UPDATE,
    task
  }
}

export const save = (task) => {
  return {
    type: UPDATE,
    task
  }
}

export const clearTaskToUpdate = () => {
  return {
    type: CLEAR_TASK_TO_UPDATE,
  }
}

export const deleteTask = (id) => (dispatch, getState) => {
  database.ref(`/tasks/${auth.currentUser.uid}/${id}`)
    .remove()
    .then(() => dispatch(showNotification('Deleted :-(')))
    .catch(() => dispatch(showNotification('ERROR! Nothing deleted!!!')))
}

export const saveNew = (name) => (dispatch, getState) => {
  database.ref(`/tasks/${auth.currentUser.uid}`)
    .push({
      name,
      checked: false,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
    })
    .then(() => dispatch(showNotification('Saved :-)')))
    .catch(() => dispatch(showNotification('ERROR! Nothing saved!!!')))
}

export const toggleCheck = (task) => (dispatch, getState) => {
  database.ref(`/tasks/${auth.currentUser.uid}/${task.id}`)
  .update({checked: !task.checked}  ) 
  .then(() => dispatch(showNotification(task.checked?'You still need to work on it ^^':'Task completed')))
  .catch(() => dispatch(showNotification('ERROR! Toggle task dont executed!!!')))
}

export const update = (task) => (dispatch, getState) => {
  database.ref(`/tasks/${auth.currentUser.uid}/${task.id}`)
    .update({     
         name: task.name
    })
    .then(() => {
      dispatch(showNotification('Updated :-)'),
      dispatch(clearTaskToUpdate())
    )})
    .catch(() => dispatch(showNotification('ERROR! Not updated!')))
}

export const init = () => (dispatch) => {
  dispatch(startLoading())
  database.ref(`/tasks/${auth.currentUser.uid}`)
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
      dispatch(stopLoading())
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
        task: action.task,
        
      }
    case SAVE_NEW:
      return {
        ...state,
        name: action.name
      }
    case SET_TASK_TO_UPDATE:
      return {
        ...state,
        taskToUpdate: action.task
      }
      case CLEAR_TASK_TO_UPDATE:
      return {
        ...state,
        taskToUpdate: {
          id:''
        }
      }
    default:
      return state
  }
}