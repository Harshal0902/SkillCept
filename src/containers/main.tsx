import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { motion } from "framer-motion"
import Navbar from '../components/Navbar/Navbar'
import Chatbot from "../components/Chatbot/Chatbot"
import Home from "../pages/Home/Home"
import Learn from "../pages/Learn/Learn"
import ClassRoom1 from "../pages/Classroom/Classroom1"
import Contact from '../pages/Contact/Contact';
import Footer from "../components/Footer/Footer"

function Main() {

    const fadeNav = {
        hidden: {
            opacity: 0,
            y: -80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const fadeChatbot = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4
            }
        },
    }

    return (
        <Router>
            <motion.div variants={fadeNav} initial="hidden" animate="visible">
                <Navbar />
            </motion.div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/learn' exact component={Learn} />
                <Route path='/class1' exact component={ClassRoom1} />
                <Route path='/contact' exact component={Contact} />
                <Redirect to="/" />
            </Switch>
            <motion.div variants={fadeChatbot} initial="hidden" animate="visible" >
                <Chatbot />
            </motion.div>
            <Footer />
        </Router>
    )
}

export default Main
