import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import TicTacToeImg from "../../assets/funZone/TicTacToe.png"

export default function FunZone() {

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

    const fadeDesc = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .8,
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
        <div className="pt-16 bg-homeImg h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                {t('funZoneTitle')}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
            </motion.div>

            <motion.div variants={fadeDesc} initial="hidden" animate="visible" className="font-sourceSerifPro italic md:pl-12 sm:pl-10 text-2xl">{t('funZoneDesc')}</motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap justify-around w-full px-16">

                <Link to='/tictactoe'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {TicTacToeImg} />
                             <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Tic Tac Toe Game</div>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
        </div>
    )
}
