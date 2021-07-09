import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/Home/Home"
import Contact from '../components/Contact/Contact';
import Footer from "../components/Footer/Footer"

function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/contact' exact component={Contact} />
                {/* <Route path="/" exact component={Home} /> */}
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main

