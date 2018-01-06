import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ToDo from "./Todo";

const App = () => {
    return (
        <div>
            <div>
                <Header/>
                <ToDo />                
                <Footer/>
            </div>
        </div>
    )
};

export default App;
