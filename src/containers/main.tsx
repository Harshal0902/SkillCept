import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/Home/Home"

function main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route path="/" exact component={Home} /> */}
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default main