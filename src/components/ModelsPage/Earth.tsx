import React from 'react'

export default function Earth() {
    return (
        <>
            <div className="pt-32 bg-ARbg">

                {/* Model 1 */}
                <div className="md:grid md:grid-cols-3 lg:mx-24 sm:mx-4 md:gap-6">
                    <div className="h-full md:col-span-1 lg:block sm:none outline-none">
                        <iframe src="https://go.echoar.xyz/HyD5" title="Earth" className="iframe w-full h-full" />
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="font-fontVollkorn mx-8 self-center text-white text-5xl font-bold mb-4 tracking-wide">Earth</h2>

                            <p className="font-fontVollkorn mx-8 self-center text-white text-xl text-justify tracking-wide">Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.
                            </p>

                            <p className="font-fontVollkorn mx-8 self-center text-white text-xl text-justify tracking-wide">To view the 3D model in AR, scan th QR code or click on the link below.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 pb-8 justify-center mx-8 lg:grid-cols-2 gap-6">
                                <img className="flex text-6xl rounded-xl p-6 h-72 w-72" src="https://storage.echoar.xyz/noisy-scene-5023/6357f4df-490c-4851-8f72-3407a46a6c3b" alt="Earth QR" />
                                <a href="https://go.echoar.xyz/HyD5" target="_blank" rel="noreferrer">
                                    <button className="font-fontVollkorn lg:mt-36 ml-12 sm:mt-4 h-12 bg-red-50 text-white px-8 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg">View in AR</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
