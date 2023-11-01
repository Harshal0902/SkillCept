import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeLogo, fadeDesc, fadeBottom, fadeItem } from '../animations'
import de from '../locales/de/translationDe.json'
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };

export default function Funzone() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    return (
        <div className="pt-8 md:pt-16 h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide text-white lg:text-6xl">
                    {t.funZoneTitle}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
            </motion.div>

            <motion.div variants={fadeDesc} initial="hidden" animate="visible" className="italic md:pl-12 sm:pl-10 text-2xl text-white">{t.funZoneDesc}</motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap justify-around w-full px-16">

                <Link href="/funzone/ticTacToe" passHref>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="cursor-pointer transition duration-500 transform hover:scale-105 border-4 bg-gray-200 border-secondary rounded-lg">
                            <Image src="/funZone/TicTacToe.png" height="300" width="300" alt="TicTacToe" />
                            <div className="grid place-content-center mx-1 text-2xl font-semibold text-gray-900">{t.funZoneGameTitle}</div>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
        </div>
    )
}
