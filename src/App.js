import React, { Component } from 'react';
import './App.css';
import route from './route';
import {Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
import Menu from './component/Menu/Menu';

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Menu>

                    </Menu>
                    <div className="container">
                        <div className="row">
                            {this.ShowContenMenus(route)}
                        </div>


                    </div>


                </div>

            </Router>
        );
    }
    ShowContenMenus = (route) => {
        var result = null;
        if (route.length > 0) {
            result = route.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
