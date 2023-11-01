import Link from "next/link";
import Image from "next/image";
import { subjectsInfo } from "../details";
import { motion } from "framer-motion";
import { fadeLogo, fadeBottom, fadeItem } from "../animations";
import de from '../locales/de/translationDe.json'
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };
export default function Subject() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    return (
        <div className="pt-8 md:pt-16 min-h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl text-white">
                    {t.subjectTitle}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-4">
                {subjectsInfo.map((subject) => (
                    <Link href={`/subject/${subject.Title}`} passHref key={subject.Title}>
                        <motion.div variants={fadeItem} className="pb-16 my-2 md:m-8 md:pb-24 cursor-pointer border-4 border-secondary rounded-lg">
                            <Image src="/class/subject.jpg" height="220" width="320" alt="Subject Image" className="transition duration-500 transform hover:scale-110" />
                            <div className="-mt-28 md:-mt-36 text-4xl font-semibold text-white transition duration-500 transform  hover:scale-105 text-center capitalize">{t[subject.Title]}</div>
                        </motion.div>
                    </Link>
                ))}

                <motion.div variants={fadeItem} className="m-8">
                    <div className="w-72 h-56 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">{t.subjectMore}</div>
                    </div>
                </motion.div>

            </motion.div>

        </div>
    );
}
