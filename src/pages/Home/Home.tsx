import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import threeD from "../../assets/home/3d.png"
import AR from "../../assets/home/AR.png"
import MultiLang from "../../assets/home/multilang.png"
import SkillCemptImg from "../../assets/skillceptBg.jpg"
import { motion } from "framer-motion"

export default function Home() {

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .6,
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
                delay: .6,
            }
        },
    }

    const fadeFeat = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .6
            }
        },
    }

    const { t } = useTranslation();

    return (
        <>
            <div className="pt-16 bg-homeImg">
                <div className="p-4 lg:mx-36 md:mx-8 origin-bottom-right">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 p-4">

                        <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="md:flex md:flex-col md:justify-center pr-4">

                            <h2 className="font-dancingScript self-center text-indigo-800 text-5xl md:text-4xl lg:text-7xl font-bold mb-4 tracking-wider">SkillCept</h2>

                            <p className="font-sourceSerifPro self-center text-xl text-justify tracking-wide">{t('homeAbout')}</p>

                            <Link to="learn">
                                <button className="font-sourceSerifPro md:w-1/3 px-8 mt-4 bg-red-50 text-white p-2 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg ">{t('homeExplore')}</button>
                            </Link>

                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" animate="visible" className="">
                            <img src={SkillCemptImg} alt="img" className="w-screen lg:p-10" />
                        </motion.div>

                    </div>
                </div>

                <motion.div variants={fadeFeat} initial="hidden" animate="visible" className="text-center mb-20">
                    <h1 className="font-dancingScript title-font mb-4 text-4xl font-extrabold leading-10 sm:text-5xl sm:leading-none md:text-6xl tracking-wider">{t('homeOtherFeat')}</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </motion.div>

                <div className="flex items-center justify-center pb-8">
                    <div className="font-sourceSerifPro grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                        <div className="relative bg-white p-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className="text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={threeD} alt="3D" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{t('home3D')}</p>
                                <div className="flex space-x-2 text-gray-800 text-basic font-medium">
                                    <p >{t('home3Ddetails')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white p-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={AR} alt="AR" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{t('homeAR')}</p>
                                <div className="flex space-x-2 text-gray-800 text-basic">
                                    <p>{t('homeARDetails')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white p-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={MultiLang} alt="MultiLang" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{t('homeMultiLang')}</p>
                                <div className="flex space-x-2 text-gray-800 text-basic ">
                                    <p>{t('homeMultiLangDetails')}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
