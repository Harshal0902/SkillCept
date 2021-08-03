import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion"
import "../../i18n"
import { useTranslation } from 'react-i18next'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/solar_system/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.006} />
        </>
    );
};

export default function SolarSystem() {

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

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="h-full w-full px-4 md:col-span-1 lg:block outline-none cursor-pointer">
                        <Canvas>
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

                            <h2 className="font-fontVollkorn mx-8 self-center text-black text-5xl font-medium mb-4 tracking-wide">{t('modelSolarSystemTitle')}</h2>

                            <p className="font-fontVollkorn mx-8 self-center text-black text-xl font-medium text-justify tracking-wide">{t('modelSolarSyatemDetails')}
                            </p>

                            {/* <p className="font-fontVollkorn mx-8 self-center text-black text-xl text-justify tracking-wide">{t('modelView')}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 pb-8 justify-center mx-8 lg:grid-cols-2 gap-6">
                        <img className="flex text-6xl rounded-xl p-6 h-72 w-72" src="https://storage.echoar.xyz/noisy-scene-5023/6357f4df-490c-4851-8f72-3407a46a6c3b" alt="Earth QR" />
                        <a href="https://go.echoar.xyz/HyD5" target="_blank" rel="noreferrer">
                            <button className="font-fontVollkorn lg:mt-36 ml-12 sm:mt-4 h-12 bg-red-50 text-white px-8 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg">{t('modelViewInAR')}</button>
                        </a>
                    </div> */}

                        </div>
                    </motion.div>

                </div>

            </div>
        </>
    );
}