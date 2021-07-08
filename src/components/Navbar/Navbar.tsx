import { Fragment } from 'react'
import Headroom from "react-headroom";
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import fire from "../../firebase"

const handleLogout = () => {
    fire.auth().signOut();
}


export default function Example() {
    return (
        <Headroom style={{ position: "fixed" }}>
            <Disclosure as="nav" className="bg-gray-900 ">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:mx-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6 outline-none" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link to='/' className="logo text-white text-4xl h-8 w-auto no-underline">SkillCept</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">

                                            <Link to='/' className="nav__links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium no-underline font-serif">Home</Link>

                                            <Link to='/' className="nav__links text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium no-underline font-serif">Class</Link>

                                            {/* {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium no-underline"
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    <div className='nav-links cursor-pointer' onClick={handleLogout}>
                                        <img alt="logout" src="https://img.icons8.com/dusk/35/000000/logout-rounded-left.png" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline font-serif">Home</Link>

                                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline font-serif">Class</Link>

                                {/* {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))} */}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </Headroom>
    )
}
