import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Chatbot from "../components/Chatbot/Chatbot"
import Home from "../pages/Home/Home"
import Learn from "../pages/Learn/Learn"
import ClassRoom1 from "../pages/Classroom/Classroom1"
import Contact from '../pages/Contact/Contact';
import Footer from "../components/Footer/Footer"

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/learn' exact component={Learn} />
                <Route path='/class1' exact component={ClassRoom1} />
                <Route path='/contact' exact component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Chatbot />
            <Footer />
        </Router>
    )
}

export default Main

