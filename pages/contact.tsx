import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeBottom } from '../animations'
import de from '../locales/de/translationDe.json'
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };

export default function Contact() {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];

  return (
    <div className="relative px-8 py-8 md:py-16 overflow-hidden text-gray-100" >

      <motion.div variants={fadeBottom} initial="hidden" animate="visible"
        className="relative grid max-w-screen-xl grid-cols-1 gap-8 px-5 py-8 mx-auto mt-16 text-gray-900 bg-white shadow-xl z-1 md:grid-cols-2 md:px-8 lg:px-8 xl:px-16 rounded-xl">

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-wider lg:text-4xl">{t.contactTilte}</h2>
            <div className="mt-4 text-gray-700">
              {t.contactHateEmail} <a href="mailto:harshalraikwar07@gmail.com" className="text-blue-800 underline cursor-pointer">{t.contactTextEmail}</a> {t.contactInstead}
            </div>
          </div>
          <div className="mt-2 text-center">
            <Image className="w-full" src="/contact/contact.svg" width="400" height="400" alt="Contact Me" />
          </div>
        </div>

        <form action="https://formspree.io/f/xbjqarrq" method="POST" className="lg:px-12 sm:px-1">
          <div>
            <span className="text-sm font-bold tracking-wide text-gray-600 uppercase">{t.contactFormName}</span>
            <input className="w-full p-3 mt-2 text-gray-900 rounded-lg bg-homeImg focus:outline-none focus:shadow-outline bg-gray-200" type="text" name="Sender's Name" required
              placeholder="" />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold tracking-wide text-gray-600 uppercase">{t.contactFormEMail}</span>
            <input className="w-full p-3 mt-2 text-gray-900 rounded-lg bg-homeImg focus:outline-none focus:shadow-outline bg-gray-200" required
              type="email" name="Sender's Email" />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold tracking-wide text-gray-600 uppercase">{t.contactFormMessage}</span>
            <textarea
              className="w-full p-3 mt-2 text-gray-900 rounded-lg h-36 bg-homeImg focus:outline-none focus:shadow-outline bg-gray-200" required name="Sender's Message"></textarea>
          </div>
          <div className="mt-8">

            <button className="w-full px-4 py-3 font-bold text-white uppercase bg-indigo-500 border-b-4 border-gray-500 rounded-full hover:border-b-2 focus:border-gray-400">
              {t.contactFormSendMessage}
            </button>

          </div>
        </form>
      </motion.div>

    </div>
  )
}
