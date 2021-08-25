import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import "../../i18n"
import { useTranslation } from 'react-i18next'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/perseverance/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.5} />
        </>
    );
};

export default function Perseverance() {
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
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-4xl font-medium tracking-wide font-fontVollkorn">{t('modelPerseverance')}</h2>

                            <p className="self-center mx-8 sm:text-sm md:text-xl font-medium tracking-wide text-justify font-fontVollkorn">
                            {t('modelPerseveranceDetails')}
                                <a target="blank" href="https://sketchfab.com/3d-models/perseverance-nasa-mars-landing-2021-c1c94e1f69df45eeae4a0a1d0d27e85b">Perseverance - NASA Mars Landing 2021</a> made by <a href="https://sketchfab.com/nebulousflynn" target="blank" >Thomas Flynn </a>
                                licensed under <a href="http://creativecommons.org/publicdomain/zero/1.0/" target="blank">CC0-1.0</a>
                            </p>

                            {/* <Link to="perseveranceexplore" className="md:w-1/3">
                                <button
                                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-64 my-4 ml-8 py-4 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 font-fontVollkorn"
                                    type="button"
                                >{t('homeExplore')}</button>
                            </Link> */}

                            <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-64 w-64" src="https://storage.echoar.xyz/wispy-violet-4999/6bca4f75-c15c-4754-8227-e9d027561e4f" alt="Perseverance QR" />
                                <a href="https://go.echoar.xyz/G6xs" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
