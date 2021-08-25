import React from 'react'
import Love from "../../assets/love.png"
import ReactImg from "../../assets/react.png"
import Ts from "../../assets/typescript.png"
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="flex bg-gray-900 font-fontVollkorn text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; {t('footerWith')} <img className="w-8 mb-1" src={Love} alt="Love" />,<img className="w-6 mb-1 animate-spin-slow" src={ReactImg} alt="React" /> &nbsp;{t('footerAnd')} <img className="w-8 mb-1" src={Ts} alt="TS" /> {t('footerBy')} <a className="text-white underline hover:text-white" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer"> &nbsp;{t('footerMyName')}</a>
        </div>
    )
}
