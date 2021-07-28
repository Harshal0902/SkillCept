import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import ClassImg from "../../assets/class/class.png"

export default function Learn() {

    const fadeLogo = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .6,
            }
        },
    }

    const fadeBottom = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2,
            }
        },
    }

    const fadeItem = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    const { t } = useTranslation();

    return (
        <div className="pt-16 bg-homeImg">

            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="w-full py-10 grid place-items-center">
                <h1 className="font-dancingScript pb-2 font-semibold tracking-wide text-5xl lg:text-6xl">
                    {t('learnCLassTitle')}
                </h1>
                <div className="w-72 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="w-full px-16 flex justify-around flex-wrap">

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer ">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">1</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">2</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">3</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">4</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">5</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">6</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">7</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">8</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-24 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-110">9</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">10</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">11</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-64 h-64 cursor-pointer">
                            <img className="rounded-lg transform transition duration-500 hover:scale-110 border-4 border-blue-600" alt="" src={ClassImg} />
                            <div className="font-sourceSerifPro -mt-40 ml-20 pl-1 w-1/3 text-6xl text-white font-semibold transform transition duration-500 hover:scale-105">12</div>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
        </div>
    )
}
