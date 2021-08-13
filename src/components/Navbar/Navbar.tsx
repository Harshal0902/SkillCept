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
        <Headroom className="fixed z-50 w-full">
            <Popover className="relative z-10 bg-gray-900">
                {({ open }) => (
                    <div className="">
                        <div className="px-4  mx-auto max-w-7xl sm:px-6">
                            <div className="flex items-center justify-between py-3 border-b-2 md:justify-start md:space-x-8">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <Link to='/' className="w-auto text-5xl text-white no-underline cursor-pointer font-dancingScript">SkillCept</Link>
                                </div>
                                <div className="-my-2 -mr-2 md:hidden">
                                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuAlt3Icon className="h-7 w-7 focus:outline-none" aria-hidden="true" />
                                    </Popover.Button>
                                </div>

                                <Popover.Group as="nav" className="hidden md:flex md:space-x-0 lg:space-x-3">

                                    <Link to='/' className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkHome')}</Link>

                                    <Link to='/learn' className="px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkLearn')}</Link>

                                    <Link to='/funzone' className="px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkFunZone')}</Link>

                                    <Link to='/contact' className="px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkContact')}</Link>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="my-1 inline-flex justify-center w-full p-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md font-sourceSerifPro hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                                {t('navChangeLang')}
                                                <svg
                                                    className="w-5 h-5"
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
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items static className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none font-sourceSerifPro">

                                                <Menu.Item>
                                                    <div className="w-full px-14 py-3 text-sm cursor-pointer" onClick={changeLang("en")} >
                                                        English
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-16 py-3 text-sm cursor-pointer" onClick={changeLang("hi")} >
                                                        हिंदी
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("de")} >
                                                        Deutsche
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("ru")} >
                                                        русский
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("fr")} >
                                                        français
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-14 py-3 text-sm cursor-pointer" onClick={changeLang("ja")} >
                                                        日本
                                                    </div>
                                                </Menu.Item>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <div className='pl-2 mt-1 cursor-pointer nav-links' onClick={handleLogout}>
                                        <img src={LogoutIcon} height="40" width="40" className="text-white " alt="logout" aria-hidden="true" />
                                    </div>

                                </Popover.Group>

                                {/* </div> */}
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
                                className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                            >
                                <div className="bg-gray-800 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                                    <div className="px-5 pt-3 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                                    <Link to='/' className="w-auto h-8 text-5xl text-white no-underline font-dancingScript">SkillCept</Link>
                                                </div>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="w-6 h-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid text-white font-sourceSerifPro gap-y-8">
                                                {t('navSiteDetail')}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="px-5 py-6 space-y-6">

                                        <div className="grid place-items-center">

                                            <Link to='/' className="px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkHome')}</Link>

                                            <Link to='/learn' className="px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkLearn')}</Link>

                                            <Link to='/funzone' className="px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkFunZone')}</Link>

                                            <Link to='/contact' className="px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white">{t('navLinkContact')}</Link>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                        </div>

                                        <div className="pl-3 text-xl text-gray-300 font-sourceSerifPro hover:bg-gray-700">{t('navChangeLang')}:</div>

                                        <div className="grid grid-cols-3 pl-5 gap-y-4 gap-x-4">

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("en")}>
                                                English
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("hi")}>
                                                हिंदी
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("de")}>
                                                Deutsche
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("ru")}>
                                                русский
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("fr")}>
                                                français
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("ja")}>
                                                日本
                                            </div>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                        </div>

                                        <div className='grid cursor-pointer place-items-center' onClick={handleLogout}>
                                            <img src={LogoutIcon} height="40" width="40" className="text-white" alt="logout" aria-hidden="true" />
                                        </div>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </div>
                )}
            </Popover>
        </Headroom>
    )
}
