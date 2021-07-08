import React from 'react'
import Study from "../../Assets/study.svg"

interface Props {
    email: any;
    setEmail: any;
    password: any;
    setPassword: any;
    handleLogin: any;
    handleSignup: any;
    hasAccount: any;
    setHasAccount: any;
    emailError: any;
    passwordError: any;
}

const Login: React.FC<Props> = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <div>
            <div className="lg:mt-0">

                <div className="md:h-96 md:w-96 md:mt-16 md:ml-44 bg-blue-600 mt-16 rounded-3xl"></div>

                <div className="p-4 m-8 lg:mx-56 md:mx-8 origin-bottom-right transform lg:-mt-80 bg-white border-blue-800 border-4 rounded-2xl">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 p-4">
                        <div className="">
                            <img src={Study} alt="img" className="w-11/12 lg:-ml-4 sm:ml-16 rounded-lg p-8" />
                        </div>

                        {/* <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">Primary</button> */}

                        <div className="md:flex md:flex-col md:justify-center mr-16">
                            <h2 className="skillcept__title self-center text-indigo-800 text-5xl md:text-4xl lg:text-7xl font-bold mb-4 tracking-wider">
                                SkillCept
                            </h2>

                            <label className="text-white block">Email</label>
                            <input className="border-b-2 rounded-xl pl-3 pb-2 border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 outline-none md:text-lg" type="text" placeholder="test@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p className="errorMsg">{emailError}</p>

                            <label className="text-white block">Password</label>
                            <input className="border-b-2 rounded-xl pl-3 pb-2 border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 outline-none md:text-lg" type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className="errorMsg">{passwordError}</p>

                            <div className="btnContainer my-3">
                                {hasAccount ? (
                                    <>
                                        <input className="w-full border-b-2 rounded-xl pl-3 pb-2 border-gray-400 focus:border-green-400 text-gray-800 placeholder-gray-400 outline-none md:text-lg" type="password" placeholder="Conform Password" required value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "20px" }} />

                                        <button className="border-none text-white bg-indigo-600 w-full py-3 text-4 cursor-pointer rounded-3xl" onClick={handleSignup}>Sign In</button>


                                        <p className="-mx-4 mt-4 text-right text-gray-700">Have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                ) : (
                                    <>
                                        <button className="border-none text-white bg-indigo-600 w-full py-3 text-4 cursor-pointer rounded-3xl" onClick={handleLogin}>Sign In</button>

                                        <p className="-mx-4 mt-4 text-right text-gray-700">Dont't have an account?{" "}
                                            <span className="text-gray-900 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="float-right h-40 w-40 mr-48 -mt-40 bg-blue-600 rounded-3xl md:block sm:hidden"></div>

            </div>
        </div>
    )
}

export default Login
