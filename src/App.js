import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './App.css';
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <div style={{backgroundColor: '#2980b9'}}>
                    <Route path="/" exact component={Main}/>
                </div>
            </Router>
        );
    }
}

export default App;
