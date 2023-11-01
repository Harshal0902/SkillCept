import React from 'react'
import Image from 'next/image';
import de from '../locales/de/translationDe.json'
import en from '../locales/en/translationEn.json';
import fr from '../locales/fr/translationFr.json';
import hi from '../locales/hi/translationHi.json';
import ja from '../locales/ja/translationJa.json';
import ru from '../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };

export default function Footer() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    return (
        <div className="flex text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; {t.footerWith} <Image className="w-8 mb-1" height="25" width="25" src="/love.png" alt="Love" />,<Image src="/next-js.svg" height="20" width="20" alt="Next" /> &nbsp;{t.footerAnd} &nbsp;<Image src="/typescript.svg" height="20" width="20" alt="TS" /> &nbsp; {t.footerBy} &nbsp;<a className="underline" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer">{t.footerMyName}</a>
        </div>
    )
}
