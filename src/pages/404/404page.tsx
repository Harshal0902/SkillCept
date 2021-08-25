import React from 'react'
import { Link } from "react-router-dom"
import AstronautImg from "../../assets/404/astronaut.png"
import EarthImg from '../../assets/404/earth.png'
import MoonImg from "../../assets/404/moon.svg"
import { useTranslation } from 'react-i18next'

export default function Page404() {

    const { t } = useTranslation();

    return (
        <div className="w-full h-screen bg-gradient-to-b from-page404A to-page404C">

            <div className="stars z-0"></div>
            <div className="stars1 z-0"></div>
            <div className="stars2 z-0"></div>
            <div className="shooting-stars z-0"></div>


            <div className="h-full grid grid-cols-1 md:grid-cols-2">

                <div className="z-10 md:px-8 sm:px-0">
                    <Link to="/">
                        <img className="absolute mt-20 w-72 h-72 md:inset-x md:bottom-36" alt="Earth" src={EarthImg} />
                    </Link>
                    <img className="absolute w-40 h-40 mt-12 md:top-36 ml-52" alt="Moon" src={MoonImg} />
                </div>

                <div className="pl-4 md:pl-16 mt-36 tracking-wider text-left text-white font-fontVollkorn md:flex md:flex-col md:justify-center">
                    <div className="box_astronaut">
                        <img width="200px" className="mt-16 object_astronaut" alt="Astronaut" src={AstronautImg} />
                    </div>
                    <div className="text-6xl md:text-9xl">404</div>
                    <div className="text-2xl md:text-5xl">{t('404Title')}</div>
                    <div className="text-xl md:text-3xl">{t('404Lost')}</div>
                    <div className="text-xl md:text-3xl">{t('404Earth')}</div>
                </div>

            </div>

        </div>
    )
}
