import Image from "next/image"
import Link from 'next/link'
import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { BiArrowBack } from "react-icons/bi"
import de from '../../../locales/de/translationDe.json'
import en from '../../../locales/en/translationEn.json';
import fr from '../../../locales/fr/translationFr.json';
import hi from '../../../locales/hi/translationHi.json';
import ja from '../../../locales/ja/translationJa.json';
import ru from '../../../locales/ru/translationRu.json';
import { useRouter } from 'next/router';

const locales = { en, de, fr, hi, ja, ru };

type GLTFResult = GLTF & {
    nodes: {
        static_rotor2_Mat_maverick012_ec135bmp_0: THREE.Mesh
        static_rotor_Mat_maverick011_ec1351bmp_0: THREE.Mesh
        chassis_Mat_maverick008_ec135bmp_0: THREE.Mesh
        chassis_Mat_maverick009_ec1351bmp_0: THREE.Mesh
        chassis_Mat_maverick010_0: THREE.Mesh
    }
    materials: {
        ['Mat_maverick.012_ec135.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.011_ec1351.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.008_ec135.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.009_ec1351.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.010']: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/aeronautics/helicopter_v2/scene.gltf') as unknown as GLTFResult
    const [hovered, set] = useState(null)

    console.log(hovered)
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
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.static_rotor2_Mat_maverick012_ec135bmp_0.geometry}
                            material={materials['Mat_maverick.012_ec135.bmp']}
                        />
                    </group>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.static_rotor_Mat_maverick011_ec1351bmp_0.geometry}
                            material={materials['Mat_maverick.011_ec1351.bmp']}
                        />
                    </group>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.chassis_Mat_maverick008_ec135bmp_0.geometry}
                            material={materials['Mat_maverick.008_ec135.bmp']}
                        />
                        <mesh
                            geometry={nodes.chassis_Mat_maverick009_ec1351bmp_0.geometry}
                            material={materials['Mat_maverick.009_ec1351.bmp']}
                        />
                        <mesh geometry={nodes.chassis_Mat_maverick010_0.geometry} material={materials['Mat_maverick.010']} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    if (snap.current === "Mat_maverick.008_ec135.bmp") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.EurocopterEC135RotorHead}</h1>
                <h1 className="text-xl">{t.EurocopterEC135RotorHeadDetails}</h1>
            </div>
        )
    }
    else if (snap.current === "Mat_maverick.010") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.EurocopterEC135Cockpit}</h1>
                <h1 className="text-xl">{t.EurocopterEC135CockpitDetails}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t.EurocopterEC135KnowMore}</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">{t.modelView}<span className="md:hidden"> {t.modelViewResponsive}</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="/aeronautics/dragon2qr.jpeg" width="250" height="250" alt="Aeronautics QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/Kn7b" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">{t.modelViewInAR}</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function EC135() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    return (
        <div className="pt-8 md:pt-24 text-white">

            <Link href="/subject/aeronautics" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl lowercase" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    {t.goBack}
                </button>
            </Link>

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    {t.EurocopterEC135}
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
                <p className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.EurocopterEC135Desc}</p>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <Suspense fallback={null}>
                            <Model scale={0.25} />
                            {/* <Environment preset="city" /> */}
                        </Suspense>
                        {/* <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
                        <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                </div>

                <div className="mt-56 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </div>
    )
}
