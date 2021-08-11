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
                <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="pr-4 md:flex md:flex-col md:justify-center">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-dancingScript md:text-4xl lg:text-7xl">SkillCept</h2>

                            <p className="self-center text-xl tracking-wide text-justify font-sourceSerifPro">{t('homeAbout')}</p>

                            <Link to="learn" className="md:w-1/3">
                                <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">{t('homeExplore')}</button>
                            </Link>

                        </motion.div>

                        <motion.div variants={fadeRight} initial="hidden" animate="visible" className="">
                            <img src={SkillCemptImg} alt="img" className="w-screen lg:p-10" />
                        </motion.div>

                    </div>
                </div>

                <motion.div variants={fadeFeat} initial="hidden" animate="visible" className="mb-20 text-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-wider font-dancingScript title-font sm:text-5xl sm:leading-none md:text-6xl">{t('homeOtherFeat')}</h1>
                    <div className="flex justify-center mt-2">
                        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-52"></div>
                    </div>
                </motion.div>

                <div className="flex items-center justify-center pb-8">
                    <div className="grid grid-cols-1 gap-12 font-sourceSerifPro sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                        <div className="relative w-64 p-6 my-4 bg-white shadow-xl rounded-3xl">
                            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={threeD} alt="3D" />
                            </div>
                            <div className="mt-8">
                                <p className="my-2 text-xl font-semibold">{t('home3D')}</p>
                                <div className="flex space-x-2 font-medium text-gray-800 text-basic">
                                    <p >{t('home3Ddetails')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-64 p-6 my-4 bg-white shadow-xl rounded-3xl">
                            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={AR} alt="AR" />
                            </div>
                            <div className="mt-8">
                                <p className="my-2 text-xl font-semibold">{t('homeAR')}</p>
                                <div className="flex space-x-2 text-gray-800 text-basic">
                                    <p>{t('homeARDetails')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-64 p-6 my-4 bg-white shadow-xl rounded-3xl">
                            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img className="w-12" src={MultiLang} alt="MultiLang" />
                            </div>
                            <div className="mt-8">
                                <p className="my-2 text-xl font-semibold">{t('homeMultiLang')}</p>
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
