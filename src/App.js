import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './App.css';
import Homepage from "./components/Homepage";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <Router>
                <div style={{backgroundColor: '#fff'}}>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/tentang" component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;
