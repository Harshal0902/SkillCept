import React from 'react'
import ContacImg from "../../assets/contact/contact.svg"
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation();
    return (
        <div className="relative overflow-hidden text-gray-100 px-8 py-16 bg-homeImg" >

            <div
                className="relative z-1 max-w-screen-xl mt-16 px-5 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-8 lg:px-8 xl:px-16 py-12 mx-auto bg-white text-gray-900 rounded-xl shadow-xl">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="font-dancingScript text-4xl lg:text-5xl font-bold tracking-wider leading-tight">{t('contactTilte')}</h2>
                        <div className="font-sourceSerifPro text-gray-700 mt-8">
                        {t('contactHateEmail')} <a href="mailto:harshalraikwar07@gmail.com" className="text-blue-800 underline cursor-pointer">{t('contactTextEmail')}</a> {t('contactInstead')}
                        </div>
                    </div>
                    <div className="mt-2 lg:p-12 sm:p-1 text-center">
                        <img className="w-full" src={ContacImg} alt="Send message" />
                    </div>
                </div>
                <form action="https://formspree.io/f/xbjqarrq" method="POST" className="lg:px-12 sm:px-1">
                    <div>
                        <span className="font-sourceSerifPro uppercase tracking-wide text-sm text-gray-600 font-bold">{t('contactFormName')}</span>
                        <input className="font-sourceSerifPro w-full bg-homeImg text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="Sender's Name" required
                            placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="font-sourceSerifPro uppercase tracking-wide text-sm text-gray-600 font-bold">{t('contactFormEMail')}</span>
                        <input className="font-sourceSerifPro w-full bg-homeImg text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required
                            type="email" name="Sender's Email" />
                    </div>
                    <div className="mt-8">
                        <span className="font-sourceSerifPro uppercase text-sm tracking-wide text-gray-600 font-bold">{t('contactFormMessage')}</span>
                        <textarea
                            className="font-sourceSerifPro w-full h-44 bg-homeImg text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required name="Sender's Message"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="font-sourceSerifPro uppercase text-sm font-bold tracking-wider bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit" id="formBtn">
                            {t('contactFormSendMessage')}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
