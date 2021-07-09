import React from 'react'
import Love from "../../Assets/love.png"
import ReactImg from "../../Assets/react.png"
import Ts from "../../Assets/typescript.png"
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer_text w-full py-3 flex place-items-center justify-center bg-gray-900 text-white md:text-2xl sm:text-xs tracking-wider">
            &lt;/&gt; {t('footerWith')} <img className="w-8 mb-1" src={Love} alt="Love" />,<img className="w-6 mb-1 animate-spin-slow" src={ReactImg} alt="React" /> &nbsp;{t('footerAnd')} <img className="w-8 mb-1" src={Ts} alt="TS" /> {t('footerBy')} <a className="no-underline text-white hover:text-white" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer"> &nbsp;{t('footerMyName')}</a>
        </div>
    )
}
