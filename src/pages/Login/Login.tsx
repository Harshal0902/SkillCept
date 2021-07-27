import React from 'react'
import { motion } from "framer-motion"
import Study from "../../assets/study.svg"

interface Props {
    email: string;
    setEmail: any;
    password: any;
    setPassword: any;
    confPassword: any;
    handleLogin: any;
    handleSignup: any;
    hasAccount: any;
    setHasAccount: any;
    emailError: any;
    passwordError: any;
    lang: any;
}

const Login: React.FC<Props> = (props) => {

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, confPassword, emailError, passwordError } = props;

    return (
        <div>
            <div className="relative">

                <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="z-10 md:h-96 md:w-96 md:mt-16 md:ml-44 bg-blue-600 mt-16 rounded-3xl"></motion.div>

                <div className="z-20 p-4 m-8 lg:mx-56 md:mx-8 origin-bottom-right transform lg:-mt-80 bg-white border-blue-800 border-4 rounded-2xl">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 p-4">

                        <div className="w-11/12 lg:-ml-4 sm:ml-16 rounded-lg p-8">
                            <img width="600px" height="400px" src={Study} alt="img" />
                        </div>

                        <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                            <h2 className="font-dancingScript self-center text-indigo-800 text-5xl md:text-4xl lg:text-7xl font-bold mb-4 tracking-wider">
                                SkillCept
                            </h2>

                            <div className="font-sourceSerifPro outline relative ">
                                <input type="text" name="username" placeholder=" " className="block border-b-2 rounded-xl border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 pl-3 pb-2 w-full text-lg appearance-none focus:outline-none bg-transparent" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="absolute top-0 text-lg bg-white pb-4 text-gray-500 p-2 md:text-lg -z-1 duration-300 origin-0">Email</label>
                                <p className="errorMsg">{emailError}</p>
                            </div>

                            <div className="font-sourceSerifPro outline mt-8 relative ">
                                <input type="text" name="username" placeholder=" " className="block border-b-2 rounded-xl border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 pl-3 pb-2 w-full text-lg appearance-none focus:outline-none bg-transparent" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="absolute top-0 text-lg bg-white text-gray-500 p-2 md:text-lg -z-1 duration-300 origin-0">Password</label>
                                <p className="errorMsg">{emailError}</p>
                            </div>

                            <div className="btnContainer my-3">
                                {hasAccount ? (
                                    <>

                                        <div className="font-sourceSerifPro outline mt-5 relative ">
                                            <input type="text" name="username" placeholder=" " className="block border-b-2 rounded-xl border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 pl-3 pb-2 w-full text-lg appearance-none focus:outline-none bg-transparent" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <label className="absolute top-0 text-lg bg-white text-gray-500 p-2 md:text-lg -z-1 duration-300 origin-0">Conform Password</label>
                                            <p className="errorMsg">{emailError}</p>
                                        </div>

                                        <button className="font-sourceSerifPro border-none text-white bg-indigo-700 hover:bg-indigo-600 w-full mt-4 py-3 text-4 cursor-pointer rounded-3xl" onClick={handleSignup}>Sign Up</button>


                                        <p className="font-sourceSerifPro -mx-4 mt-4 text-right text-gray-700">Have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                ) : (
                                    <>
                                        <button className="font-sourceSerifPro border-none text-white bg-indigo-700 hover:bg-indigo-600 w-full mt-4 py-3 text-4 cursor-pointer rounded-3xl" onClick={handleLogin}>Sign In</button>

                                        <p className="font-sourceSerifPro -mx-4 mt-4 text-right text-gray-700">Dont't have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                <motion.div variants={fadeRight} initial="hidden" animate="visible" className="z-10 float-right h-40 w-40 mr-48 -mt-40 bg-blue-600 rounded-3xl md:block sm:hidden"></motion.div>

            </div>
        </div>
    )
}

export default Login
