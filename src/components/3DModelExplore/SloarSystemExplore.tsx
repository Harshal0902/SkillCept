import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type GLTFResult = GLTF & {
    nodes: {
        Sol1_lambert2_0: THREE.Mesh
        Sol1_lambert3_0: THREE.Mesh
        Sol1_lambert4_0: THREE.Mesh
        Sol1_lambert5_0: THREE.Mesh
        Sol1_lambert6_0: THREE.Mesh
        Sol1_lambert7_0: THREE.Mesh
        Sol1_lambert10_0: THREE.Mesh
        Sol1_lambert11_0: THREE.Mesh
        Sol1_lambert12_0: THREE.Mesh
        Sol1_lambert13_0: THREE.Mesh
        Sol1_lambert9_0: THREE.Mesh
    }
    materials: {
        lambert2: THREE.MeshBasicMaterial
        lambert3: THREE.MeshBasicMaterial
        lambert4: THREE.MeshBasicMaterial
        lambert5: THREE.MeshBasicMaterial
        lambert6: THREE.MeshBasicMaterial
        lambert7: THREE.MeshBasicMaterial
        lambert10: THREE.MeshBasicMaterial
        lambert11: THREE.MeshBasicMaterial
        lambert12: THREE.MeshBasicMaterial
        lambert13: THREE.MeshBasicMaterial
        lambert9: THREE.MeshBasicMaterial
    }
}

const state = proxy({
    current: null,
})

const fade = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: .4
        }
    },
}

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/SolarSystem/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Sol1_lambert2_0.geometry} material={materials.lambert2} />
                    <mesh geometry={nodes.Sol1_lambert3_0.geometry} material={materials.lambert3} />
                    <mesh geometry={nodes.Sol1_lambert4_0.geometry} material={materials.lambert4} />
                    <mesh geometry={nodes.Sol1_lambert5_0.geometry} material={materials.lambert5} />
                    <mesh geometry={nodes.Sol1_lambert6_0.geometry} material={materials.lambert6} />
                    <mesh geometry={nodes.Sol1_lambert7_0.geometry} material={materials.lambert7} />
                    <mesh geometry={nodes.Sol1_lambert10_0.geometry} material={materials.lambert10} />
                    <mesh geometry={nodes.Sol1_lambert11_0.geometry} material={materials.lambert11} />
                    <mesh geometry={nodes.Sol1_lambert12_0.geometry} material={materials.lambert12} />
                    <mesh geometry={nodes.Sol1_lambert13_0.geometry} material={materials.lambert13} />
                    <mesh geometry={nodes.Sol1_lambert9_0.geometry} material={materials.lambert9} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const { t } = useTranslation();

    const snap = useSnapshot(state)
    if (snap.current === "lambert2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreSun')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreSunDesc')}</p>
            </div>
        )
    }
    else if (snap.current === "lambert3") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreMercury')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreMercuryDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/1ed8bbb4-536c-4616-afe9-0dbee6e3432c" alt="Solar System QR" />
                    <a href="https://go.echoar.xyz/3BB2" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert4") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreVenus')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreVenusDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/50a234a1-cc5c-4870-9e1d-d709a2f3d6d2" alt="Venus QR" />
                    <a href="https://go.echoar.xyz/44Xn" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreEarth')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreEarthDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/90a2a92c-b69d-45d4-8935-9ea307faeb05" alt="Earth QR" />
                    <a href="https://go.echoar.xyz/J8oi" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert6") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreMars')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreMarsDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/633d6a9c-73d8-4207-ada6-61dc04cfebe3" alt="Mars QR" />
                    <a href="https://go.echoar.xyz/rQke" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert7") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreJupiter')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreJupiterDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/a89518a9-dc19-4857-89b0-7aea87236ecc" alt="Jupiter QR" />
                    <a href="https://go.echoar.xyz/eG6s" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert9") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreSaturn')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreSaturnDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/101dbcc9-b7a2-4e51-af71-7c73b2351e48" alt="Saturn QR" />
                    <a href="https://go.echoar.xyz/8oHR" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert10") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreUranus')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreUranusDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/ee979b82-19b0-4dad-b3d4-b4d07d1308a7" alt="Uranus QR" />
                    <a href="https://go.echoar.xyz/bttS" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else if (snap.current === "lambert11") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">{t('SolarSystemExploreNeptune')}</h1>
                <p className="text-xl text-justify">{t('SolarSystemExploreNeptuneDesc')}</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/270df91e-d092-43b1-ad6c-b1835523ec15" alt="Neptune QR" />
                    <a href="https://go.echoar.xyz/ya76" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t('SolarSystemExploreClick')}</h1>
            </div>
        )
    }
    // return (
    //     <div className="pb-12 w-full ">
    //         {snap.current}
    //     </div>
    // );
}

export default function Perseverance() {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1 bg-ARbg">

                <div className="w-full h-screen px-4 pt-16 outline-none cursor-pointer md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.002} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <motion.div variants={fade} initial="hidden" animate="visible" className="mt-16 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </motion.div>

            </div>

        </>
    )
}
