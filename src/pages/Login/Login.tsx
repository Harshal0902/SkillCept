import React from 'react'
import { motion } from "framer-motion"
import Study from "../../assets/study.svg"

interface Props {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    confPassword: string;
    handleLogin: any;
    handleSignup: any;
    hasAccount: string;
    setHasAccount: any;
    emailError: string;
    passwordError: string;
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

                <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="z-10 mt-16 bg-blue-600 md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></motion.div>

                <div className="z-20 p-4 m-8 origin-bottom-right transform bg-white border-4 border-blue-800 lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                            <img width="600px" height="400px" src={Study} alt="img" />
                        </div>

                        <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-dancingScript md:text-4xl lg:text-7xl">
                                SkillCept
                            </h2>

                            <div className="relative font-sourceSerifPro outline ">
                                <input type="text" name="username" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="absolute top-0 p-2 pb-4 text-lg text-gray-500 duration-300 bg-white md:text-lg -z-1 origin-0">Email</label>
                                <p className="errorMsg">{emailError}</p>
                            </div>

                            <div className="relative mt-8 font-sourceSerifPro outline ">
                                <input type="password" name="username" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="absolute top-0 p-2 text-lg text-gray-500 duration-300 bg-white md:text-lg -z-1 origin-0">Password</label>
                                <p className="errorMsg">{emailError}</p>
                            </div>

                            <div className="my-3 btnContainer">
                                {hasAccount ? (
                                    <>

                                        <div className="relative mt-5 font-sourceSerifPro outline ">
                                            <input type="password" name="username" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <label className="absolute top-0 p-2 text-lg text-gray-500 duration-300 bg-white md:text-lg -z-1 origin-0">Conform Password</label>
                                            <p className="errorMsg">{emailError}</p>
                                        </div>

                                        <button className="w-full py-3 mt-4 text-white bg-indigo-700 border-none cursor-pointer font-sourceSerifPro hover:bg-indigo-600 text-4 rounded-3xl" onClick={handleSignup}>Sign Up</button>


                                        <p className="mt-4 -mx-4 text-right text-gray-700 font-sourceSerifPro">Have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                ) : (
                                    <>
                                        <button className="w-full py-3 mt-4 text-white bg-indigo-700 border-none cursor-pointer font-sourceSerifPro hover:bg-indigo-600 text-4 rounded-3xl" onClick={handleLogin}>Sign In</button>

                                        <p className="mt-4 -mx-4 text-right text-gray-700 font-sourceSerifPro">Dont't have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                <motion.div variants={fadeRight} initial="hidden" animate="visible" className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-blue-600 rounded-3xl md:block sm:hidden"></motion.div>

            </div>
        </div>
    )
}

export default Login
