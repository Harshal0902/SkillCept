import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import "../../i18n"
import { useTranslation } from 'react-i18next'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/H2o/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.9} />
        </>
    );
};

export default function Water() {
    const { t } = useTranslation();

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="h-full w-full px-4 md:col-span-1 lg:block outline-none cursor-pointer">
                        <Canvas shadows dpr={[1, 2]} >
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls enablePan={false} autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="font-fontVollkorn mx-8 self-center text-black text-5xl font-medium mb-4 tracking-wide">{t('modelWaterTitle')}</h2>

                            <p className="font-fontVollkorn mx-8 self-center font-medium text-black text-xl text-justify tracking-wide">{t('modelWaterDetails')}
                            </p>

                            {/* <p className="font-fontVollkorn mx-8 self-center text-black text-xl text-justify tracking-wide">{t('modelView')}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 pb-8 justify-center mx-8 lg:grid-cols-2 gap-6">
                        <img className="flex text-6xl rounded-xl p-6 h-72 w-72" src="https://storage.echoar.xyz/noisy-scene-5023/6357f4df-490c-4851-8f72-3407a46a6c3b" alt="Earth QR" />
                        <a href="https://go.echoar.xyz/HyD5" target="_blank" rel="noreferrer">
                            <button className="font-fontVollkorn lg:mt-36 ml-12 sm:mt-4 h-12 bg-red-50 text-white px-8 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg">{t('modelViewInAR')}</button>
                        </a>
                    </div> */}

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
