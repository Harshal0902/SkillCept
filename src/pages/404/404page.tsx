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

            <div className="z-0 stars"></div>

            <div className="box_astronaut">
                <img width="200px" className="mt-16 object_astronaut" alt="Astronaut" src={AstronautImg} />
            </div>

            <div className="grid h-full lg:grid-cols-2">

                <div className="z-10 md:px-8 sm:px-0">
                    <Link to="/">
                        <img className="absolute mt-20 w-72 h-72 md:inset-x md:bottom-36" alt="Earth" src={EarthImg} />
                    </Link>
                    <img className="absolute w-40 h-40 mt-12 md:top-36 ml-52" alt="Moon" src={MoonImg} />
                </div>

                <div className="font-fontVollkorn text-gray-200 pl-24 pt-32 text-left tracking-wider md:flex md:flex-col md:justify-center">
                    <div className="md:text-9xl text-6xl">404</div> <br />
                    <div className="md:text-5xl text-2xl">{t('404Title')}</div>
                    <div className="md:text-3xl text-xl">{t('404Lost')}</div>
                    <div className="md:text-3xl text-xl">{t('404Earth')}</div>
                </div>

            </div>

        </div>
    )
}
