import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import ToDo from "./Todo";
import Form from "./form/index";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/todo' component={ToDo}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/form' component={Form}/>
                <Footer/>
            </div>
        </Router>
    )
};

export default App;
