import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer, {init as initAuth} from './state/auth';
import loadingReducer from './state/loading';
import tasksReducer from './state/tasks';
import notificationReducer from './state/notyfication'

const reducer = combineReducers({
  authReducer,
  loadingReducer,
  tasksReducer,
  notificationReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)//
  )
)

store.dispatch(initAuth())

export default store