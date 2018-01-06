import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import ToDo from "./Todo";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={ToDo} />                
                <Footer/>
            </div>
        </Router>
    )
};

export default App;
