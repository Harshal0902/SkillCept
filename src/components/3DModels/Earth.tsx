import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion"
import "../../i18n"
import { useTranslation } from 'react-i18next'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.01}/>
        </>
    );
};

export default function Earth() {

    const fade = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .8,
            }
        },
    }
    
    const { t } = useTranslation();

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 md:mr-15 mr-1 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <motion.div variants={fade} initial="hidden" animate="visible" className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-black font-fontVollkorn">{t('modelEarthTitle')}</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-black font-fontVollkorn">{t('modelEarthDetails')}
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-black font-fontVollkorn">{t('modelView')}</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-64 w-64" src="https://storage.echoar.xyz/wispy-violet-4999/90a2a92c-b69d-45d4-8935-9ea307faeb05" alt="Earth QR" />
                                <a href="https://go.echoar.xyz/J8oi" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                                </a>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </>
    );
}
