import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Headroom from "react-headroom"
import { Menu, Popover, Transition } from '@headlessui/react'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import LogoutIcon from "../../assets/logout.png"
import fire from "../../firebase"
import "../../i18n"
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const handleLogout = () => {
    fire.auth().signOut();
}

const changeLang = (ln: any) => {
    return () => {
        i18n.changeLanguage(ln);
    };
};

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <Headroom className="fixed w-full z-10">
            <Popover className="relative bg-gray-900 z-10">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                            <div className="flex justify-between items-center border-b-2 py-3 md:justify-start md:space-x-10">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <Link to='/' className="font-dancingScript text-white text-5xl w-auto no-underline cursor-pointer">SkillCept</Link>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuAlt3Icon className="h-7 w-7 focus:outline-none" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <Popover.Group as="nav" className="hidden md:flex space-x-10">

                                    <Link to='/' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline font-serif">{t('navLinkHome')}</Link>

                                    <Link to='/class' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline font-serif">{t('navLinkClass')}</Link>

                                    <Link to='/' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline font-serif">{t('navLinkFunZone')}</Link>

                                    <Link to='/contact' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline font-serif">{t('navLinkContact')}</Link>

                                </Popover.Group>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                                    {/* Change language */}
                                    <Menu>
                                        {({ open }) => (
                                            <>
                                                <span className="rounded-md shadow-sm">
                                                    <Menu.Button className="font-sourceSerifPro inline-flex justify-center w-full px-2 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                                        <span>{t('navChangeLang')}</span>
                                                        <svg
                                                            className="w-5 h-5 ml-2 -mr-1"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </Menu.Button>
                                                </span>

                                                <Transition
                                                    show={open}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items static className="font-sourceSerifPro absolute -ml-40 w-40 mt-4 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("en")} >
                                                                    English
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("hi")} >
                                                                    हिंदी
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("de")} >
                                                                    German
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("ru")} >
                                                                    Russian
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("fr")} >
                                                                    French
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <div className=" flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" onClick={changeLang("ja")} >
                                                                    Japanese
                                                                </div>
                                                            </Menu.Item>
                                                        </div>

                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>

                                    <div className='nav-links pl-4 cursor-pointer' onClick={handleLogout}>
                                        <img src={LogoutIcon} className="h-10 w-10 text-white" alt="logout" aria-hidden="true" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-50">
                                    <div className="pt-3 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                                    <Link to='/' className="font-dancingScript text-white text-5xl h-8 w-auto no-underline">SkillCept</Link>
                                                </div>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="font-sourceSerifPro grid gap-y-8 text-white">
                                                {t('navSiteDetail')}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5 space-y-6">

                                        <div className="grid place-items-center">

                                            <Link to='/' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline">{t('navLinkHome')}</Link>

                                            <Link to='/class' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline">{t('navLinkClass')}</Link>

                                            <Link to='/' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline">{t('navLinkFunZone')}</Link>

                                            <Link to='/contact' className="font-sourceSerifPro text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium no-underline">{t('navLinkContact')}</Link>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="w-64 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                                        </div>

                                        <div className="font-sourceSerifPro text-xl text-gray-300 hover:bg-gray-700">{t('navChangeLang')}:</div>

                                        <div className="grid grid-cols-3 gap-y-4 gap-x-4">

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("en")}>
                                                English
                                            </div>

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("hi")}>
                                                हिंदी
                                            </div>

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("de")}>
                                                German
                                            </div>

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("ru")}>
                                                Russian
                                            </div>

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("fr")}>
                                                French
                                            </div>

                                            <div className="font-sourceSerifPro text-base font-medium text-gray-300 hover:text-gray-200" onClick={changeLang("ja")}>
                                                Japanese
                                            </div>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="w-64 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                                        </div>

                                        <div className='grid place-items-center cursor-pointer' onClick={handleLogout}>
                                            <img src={LogoutIcon} className="h-10 w-10 text-white" alt="logout" aria-hidden="true" />
                                        </div>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </Headroom>
    )
}
