import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/Home/Home"
import Class from "../components/ClassPage/Class"
import Contact from '../components/Contact/Contact';
import Footer from "../components/Footer/Footer"

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/class' exact component={Class} />
                <Route path='/contact' exact component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main

