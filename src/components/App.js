import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import ToDo from "./Todo";
import Form from "./Form";
import Users from "./Users";
import TasksContainer  from './Tasks'

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Dashboard} />
                <Route path='/todo' component={ToDo} />
                <Route path='/counter' component={Counter} />
                <Route path='/form' component={Form} />
                <Route path='/users' component={Users} />
                <Route path='/tasks' component={TasksContainer} />
                <Footer/>
            </div>
        </Router>
    )
};

export default App;
