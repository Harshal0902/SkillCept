import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeFeat, fadeLeft, fadeRight } from '../animations'
import de from '../locales/de/translationDe.json'
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };
const Index: NextPage = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];

  return (
    <div className="pt-8 md:pt-16">
      <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
        <div className="p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white">

          <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="pr-4 md:flex md:flex-col md:justify-center">

            <h2 className="self-center mb-4 text-5xl font-semibold tracking-wider md:text-4xl lg:text-7xl">SkillCept</h2>

            <p className="self-center text-xl tracking-wide text-justify">{t.homeAbout}</p>

            <Link href="/subject" passHref>
              <button className='w-56 p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm  bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg '>{t.homeExplore}</button>
            </Link>

          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="visible" className="">
            <Image src="/skillceptBg.png" height="500" width="500" alt="img" className="w-screen lg:p-10" />
          </motion.div>

        </div>
      </div>

      <motion.div variants={fadeFeat} initial="hidden" animate="visible" className="mb-12 md:mb-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-wider title-font sm:text-5xl sm:leading-none md:text-6xl text-white">{t.homeOtherFeat}</h1>
        <div className="flex justify-center mt-2">
          <div className="inline-flex h-1 bg-indigo-500 rounded-full w-52"></div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/3d.png" height="50" width="50" alt="3D" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">{t.home3D}</p>
              <div className="flex space-x-2 font-medium text-gray-800 text-basic">
                <p >{t.home3Ddetails}</p>
              </div>
            </div>
          </div>

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/AR.png" height="50" width="50" alt="AR" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">{t.homeAR}</p>
              <div className="flex space-x-2 text-gray-800 text-basic">
                <p>{t.homeARDetails}</p>
              </div>
            </div>
          </div>

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/multilang.png" height="50" width="50" alt="MultiLang" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">{t.homeMultiLang}</p>
              <div className="flex space-x-2 text-gray-800 text-basic ">
                <p>{t.homeMultiLangDetails}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Index
