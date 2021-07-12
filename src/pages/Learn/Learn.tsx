import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import ClassImg from "../../assets/class/class.png"

export default function Learn() {
    const { t } = useTranslation();
    return (
        <div className="pt-16 bg-homeImg">

            <div className="w-full py-10 grid place-items-center">
                <h1 className="font-dancingScript pb-2 font-semibold tracking-wide text-5xl lg:text-6xl">
                    {t('learnCLassTitle')}
                </h1>
                <div className="w-72 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>

            <div className="w-full px-16 flex justify-around flex-wrap">

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer ">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">1</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">2</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">3</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">4</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">5</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">6</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">7</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">8</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">9</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">10</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">11</div>
                        </div>
                    </div>
                </Link>

                <Link to='/class1'>
                    <div className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">12</div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
