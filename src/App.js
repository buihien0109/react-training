import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Box from './components/Box';
import Counter from './components/Counter';
import TodoList from './components/todolist/TodoList';

import './App.scss';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <header className="menu-component">
                    <Link to="/" className="banner">ReactJS</Link>
                    <div className="menu">
                        <ul>
                            <li className="menu-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/counter">Counter</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/box">Box</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/calendar">Calendar</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/todolist">TodoList</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="main">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/counter">
                            <Counter />
                        </Route>
                        <Route path="/box">
                            <Box />
                        </Route>
                        <Route path="/calendar">
                            <Calendar />
                        </Route>
                        <Route path="/todolist">
                            <TodoList />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
