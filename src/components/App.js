import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>

                <Route path='./' component={null} />
                <Route path='./todo' component={null} />
                <Route path='./counter' component={null} />
            </div>
        </Router>
    )
};

export default App;