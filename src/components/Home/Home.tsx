import React from 'react'
import SkillCemptImg from "../../Assets/skillceptBg.jpg"
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ backgroundColor: "#DCE4F7" }} className="pt-12">
                <div className="p-4 lg:mx-36 md:mx-8 origin-bottom-right transform ">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 p-4">

                        <div className="md:flex md:flex-col md:justify-center pr-4">

                            <h2 className="font__title self-center text-indigo-800 text-5xl md:text-4xl lg:text-7xl font-bold mb-4 tracking-wider">
                                SkillCept
                            </h2>

                            <p className="text__font self-center text-xl text-justify tracking-wide">{t('homeAbout')}</p>

                            <button className="text__font w-1/2 bg-red-50 text-white p-2 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg ">Explore</button>

                        </div>

                        <div className="">
                            <img src={SkillCemptImg} alt="img" className="w-screen lg:p-10" />
                        </div>

                    </div>
                </div>

                <div className="text-center mb-20">
                    <h1 className="font__title title-font mb-4 text-4xl font-extrabold leading-10 sm:text-5xl sm:leading-none md:text-6xl tracking-wider">Other Features</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className="flex items-center justify-center">


                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img src="https://img.icons8.com/fluent/45/000000/3d.png" alt="3D" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Interactive 3D Models</p>
                                <div className="flex space-x-2 text-gray-800 text-basic ">
                                    <p>Digital 3D models allow students to visualize and interrogate various topics; they reinforce spatial skills, facilitate student recognition of pre-learned various principles in the field, and encourage students to think about their processes and properties.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white py-8 px-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img src="https://img.icons8.com/office/50/000000/virtual-reality.png" alt="AR" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Learn with Argumented Reality</p>
                                <div className="flex space-x-2 text-gray-800 text-basic">
                                    <p>Argumented Reality's relative seamlessness of digital objects within the "real world" encourages interactivity and engagement. It maximizes students' ability to spend their time learning curricular subjects while minimizing the time spent learning how to use the new tech.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 left-4 -top-6">
                                <img src="https://img.icons8.com/color/45/000000/language.png" alt="multilang" />
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">Available in multiple languages</p>
                                <div className="flex space-x-2 text-gray-800 text-basic ">
                                    <p>The platform is available in multiple languages for the creation and appreciation of cultural awareness, adds academic and educational value, enhances creativity, an adjustment in society, and appreciation of local languages.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
