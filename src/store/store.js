import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer, {init as initAuth} from './state/auth'
import loadingReducer from './state/loading'
import tasksReducer, { init as initTasksListening } from './state/tasks'


const reducer = combineReducers({
    authReducer,
    loadingReducer,
    tasksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)//
    )
)

//store.dispatch(initAuth())
//, initTasksListening()
store.dispatch(initAuth())
store.dispatch(initTasksListening())

export default store