import Link from "next/link";
import Image from "next/image";
import { chemPageInfo } from "../../details"
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

export default function Chemistry() {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];

  return (
    <div className="pt-8 md:pt-16 min-h-screen text-white">

      <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl">
          {t.chemistryTitle}
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
      </motion.div>

      <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16">

        <Link href="/subject/chemistry/hf" passHref>
          <motion.div variants={fadeItem} className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg">
                <Image width="480" height="300" src="/chemistry/HF.svg" alt="" className="rounded-t-md bg-white" /></div>
              <div className="grid -mt-9 place-content-center mx-1 text-xl">{t.HF}</div>
            </div>
          </motion.div>
        </Link>

        <Link href="/subject/chemistry/moh2" passHref>
          <motion.div variants={fadeItem} className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg">
                <Image width="480" height="300" src="/chemistry/mo-h2.jpeg" alt="" className="rounded-t-md" /></div>
              <div className="grid -mt-9 place-content-center mx-1 text-xl">{t.MOH2}</div>
            </div>
          </motion.div>
        </Link>

        <Link href="/subject/chemistry/dna" passHref>
          <motion.div variants={fadeItem} className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg">
                <Image width="480" height="300" src="/chemistry/DNA.jpg" alt="" className="rounded-t-md" /></div>
              <div className="grid -mt-9 place-content-center mx-1 text-xl">{t.DNA}</div>
            </div>
          </motion.div>
        </Link>

        {chemPageInfo.map((subject) => (
          <Link href={`/subject/chemistry/${subject.ChemSubject}`} passHref key={subject.Title}>
            <motion.div variants={fadeItem} className="m-8">
              <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                <div className="pb-8 border-4  border-secondary rounded-lg">
                  <Image width="480" height="300" src={`/chemistry/${subject.ImgName}`} alt="" className="rounded-t-md" /></div>
                <div className="grid -mt-9 place-content-center mx-1 text-xl">{t[subject.Title]}</div>
              </div>
            </motion.div>
          </Link>
        ))}

        <motion.div variants={fadeItem} className="m-8">
          <div className="w-72 h-56 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">{t.chemistryMore}</div>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}

export async function getStaticProps() {
  const chemInfo = chemPageInfo;

  return {
    props: { chemInfo }
  };
}
