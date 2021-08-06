import React from 'react'
import ContacImg from "../../assets/contact/contact.svg"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

export default function Contact() {

    const fadeBottom = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .6,
            }
        },
    }

    const { t } = useTranslation();

    return (
        <div className="relative px-8 py-16 overflow-hidden text-gray-100 bg-homeImg" >

            <motion.div variants={fadeBottom} initial="hidden" animate="visible"
                className="relative grid max-w-screen-xl grid-cols-1 gap-8 px-5 py-8 mx-auto mt-16 text-gray-900 bg-white shadow-xl z-1 md:grid-cols-2 md:px-8 lg:px-8 xl:px-16 rounded-xl">
                    
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold leading-tight tracking-wider font-dancingScript lg:text-5xl">{t('contactTilte')}</h2>
                        <div className="mt-4 text-gray-700 font-sourceSerifPro">
                            {t('contactHateEmail')} <a href="mailto:harshalraikwar07@gmail.com" className="text-blue-800 underline cursor-pointer">{t('contactTextEmail')}</a> {t('contactInstead')}
                        </div>
                    </div>
                    <div className="mt-2 text-center lg:p-12 sm:p-1">
                        <img className="w-full" src={ContacImg} alt="Send message" />
                    </div>
                </div>

                <form action="https://formspree.io/f/xbjqarrq" method="POST" className="lg:px-12 sm:px-1">
                    <div>
                        <span className="text-sm font-bold tracking-wide text-gray-600 uppercase font-sourceSerifPro">{t('contactFormName')}</span>
                        <input className="w-full p-3 mt-2 text-gray-900 rounded-lg font-sourceSerifPro bg-homeImg focus:outline-none focus:shadow-outline" type="text" name="Sender's Name" required
                            placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="text-sm font-bold tracking-wide text-gray-600 uppercase font-sourceSerifPro">{t('contactFormEMail')}</span>
                        <input className="w-full p-3 mt-2 text-gray-900 rounded-lg font-sourceSerifPro bg-homeImg focus:outline-none focus:shadow-outline" required
                            type="email" name="Sender's Email" />
                    </div>
                    <div className="mt-8">
                        <span className="text-sm font-bold tracking-wide text-gray-600 uppercase font-sourceSerifPro">{t('contactFormMessage')}</span>
                        <textarea
                            className="w-full p-3 mt-2 text-gray-900 rounded-lg font-sourceSerifPro h-36 bg-homeImg focus:outline-none focus:shadow-outline" required name="Sender's Message"></textarea>
                    </div>
                    <div className="mt-8">

                        <button className="w-full px-4 py-3 font-bold text-white uppercase bg-indigo-500 border-b-4 border-gray-500 rounded-full font-sourceSerifPro hover:border-b-2 focus:border-gray-400">
                            {t('contactFormSendMessage')}
                        </button>

                    </div>
                </form>
            </motion.div>

        </div>
    )
}
