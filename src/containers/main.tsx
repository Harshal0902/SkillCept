import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../pages/Home/Home"
import Class from "../pages/ClassPage/Class"
import ClassRoom1 from "../pages/Classroom/Classroom1"
import Contact from '../pages/Contact/Contact';
import Footer from "../components/Footer/Footer"

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/class' exact component={Class} />
                <Route path='/class1' exact component={ClassRoom1} />
                <Route path='/contact' exact component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main

