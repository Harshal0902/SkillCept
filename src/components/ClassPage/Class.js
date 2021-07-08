import React, { Component } from 'react'
import "./Class.scss";
import { Link } from 'react-router-dom';

export class Class extends Component {
    render() {
        return (
            <div>
                    <div className="center">
                        <h2 className="class__heading">Select Your Class</h2>
                    </div>

                    <div className="cards-list">

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class1} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class2} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class3} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class4} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class5} rel="" /> */}
                                </div>

                            </div>
                        </Link>



                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class6} rel="" /> */}
                                </div>

                            </div>
                        </Link>
                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class7} rel="" /> */}
                                </div>

                            </div>
                        </Link>
                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class8} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class9} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class10} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "40px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class11} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                        <Link to='/classes/model' style={{ textDecoration: "none" }}>
                            <div className="card" style={{ borderRadius: "20px" }}>
                                <div className="card-image">
                                    {/* <img alt="ClassImg" src={Class12} rel="" /> */}
                                </div>

                            </div>
                        </Link>

                    </div>

                <footer className="footer_text">&lt;/&gt; with <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/20/000000/like--v1.png" /> and &nbsp;<img alt="React Js" id="React-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> by Team Hack Elite</footer>

            </div>
        )
    }
}

export default Class
