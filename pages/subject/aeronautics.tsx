import Link from "next/link";
import Image from "next/image";
import { aerospaceInfo } from "../../details"
import { motion } from "framer-motion";
import { fadeLogo, fadeBottom, fadeItem } from "../../animations";
import de from '../../locales/de/translationDe.json'
import en from '../../locales/en/translationEn.json';
import fr from '../../locales/fr/translationFr.json';
import hi from '../../locales/hi/translationHi.json';
import ja from '../../locales/ja/translationJa.json';
import ru from '../../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };
export default function Aeronautics() {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];

  return (
    <div className="pt-8 md:pt-16 min-h-screen text-white">

      <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl">
          {t.aeronauticsTitle}
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
      </motion.div>

      <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16">

        {aerospaceInfo.map((subject) => (
          <Link href={`/subject/aeronautics/${subject.URL}`} passHref key={subject.Title}>
            <motion.div variants={fadeItem} className="m-8">
              <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                <div className="pb-8 border-4  border-secondary rounded-lg">
                  <Image width="480" height="310" src={`/aeronautics/${subject.ImgName}`} alt="" className="rounded-t-md" /></div>
                <div className="grid -mt-9 place-content-center mx-1 text-xl">{t[subject.Title]}</div>
              </div>
            </motion.div>
          </Link>
        ))}

        <motion.div variants={fadeItem} className="m-8">
          <div className="w-72 h-56 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">{t.aeronauticsMore}</div>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}
