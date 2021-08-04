import React from 'react'
import { Link } from "react-router-dom"
import EarthImg from '../../assets/404/earth.png'
import MoonImg from "../../assets/404/moon.svg"

export default function page4042() {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-page404A to-page404C">
            <div className="stars z-0"></div>


            {/* <div className="md:grid md:grid-cols-2 h-full">

                <div className="z-10 md:flex md:flex-col md:justify-center ">
                    <Link to="/">
                        <img className="absolute w-72 h-72 md:inset-x md:bottom-16 mt-36" alt="Earth" src={EarthImg} />
                    </Link>
                    <img className="absolute w-44 h-44 md:inset-x-52 md:bottom-68 mt-16 ml-36" alt="Moon" src={MoonImg} />
                </div>

                <div className="font-fontVollkorn text-gray-200 pb-4 pl-24 md:text-left tracking-wider md:flex md:flex-col md:justify-center">
                    <div className="md:text-9xl">404</div> <br />
                    <div className="text-5xl">Page not Foud</div>
                    <div className="text-3xl">UH OH! Looks like you are lost in space</div>
                    <div className="text-3xl">Click on Earth to land on home page</div>
                </div>

            </div> */}



        </div>
    )
}
