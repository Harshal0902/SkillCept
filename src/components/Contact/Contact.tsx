import React from 'react'
import GitHubImg from "../../Assets/contact/github.png"

export default function Contact() {
    return (
        <div style={{ backgroundColor: "#DCE4F7" }} className="pt-24 pb-16">

            <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-xl shadow-lg">
                <h2 className="font__title text-5xl font-semibold text-center text-gray-800 ">Get in touch</h2>
                <div className="grid place-items-center">

                    <a className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500 no-underline" href="https://github.com/Harshal0902/SkillCept" target="_blank" rel="noreferrer">
                    <img className="h-16 w-16" src={GitHubImg} alt="GitHub" />
                        <span className="mt-2">View on GitHUb</span>
                    </a>

                </div>

                <form action="https://formspree.io/f/xbjqarrq" method="POST" >
                    <div className="items-center -mx-2 md:flex">
                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="text__font block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">Name</label>

                            <input required className="block w-full px-2 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" name="Sender's Name" />
                        </div>

                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="text__font block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                            <input className="block w-full px-2 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" name="Sender's Email" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="text__font block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">Message</label>

                        <textarea className="block w-full h-40 px-2 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name="Sender's Message"></textarea>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" id="formBtn" className="text__font px-4 py-2 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-600 text-lg shadow-lg">Send Message</button>
                    </div>

                </form>
            </section>
        </div>
    )
}