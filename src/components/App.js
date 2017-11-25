import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">Lista zadan</Link>
                    </li>
                    <li>
                        <Link to="/counter">Licznik</Link>
                    </li>
                </ul>
                <Footer/>
                <Route path='/' component={Dashboard} />
                <Route path='/todo' component={Counter} />
                <Route path='/counter' component={null} />
            </div>
        </Router>
    )
};

export default App;