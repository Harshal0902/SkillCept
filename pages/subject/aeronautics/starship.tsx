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
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

const locales = { en, de, fr, hi, ja, ru };

type GLTFResult = GLTF & {
    nodes: {
        Bow_Window001_Starship_0: THREE.Mesh
        Primary_Hull001_Starship_0: THREE.Mesh
        Cargo_Doors001_Starship_0: THREE.Mesh
        SeaLev_Raptors_LP001_Starship_0: THREE.Mesh
        Vacuum_Raptors_LP001_Starship_0: THREE.Mesh
        Cargo_DropBoxes001_Starship_0: THREE.Mesh
        Cabin_WindowInset001_Starship_0: THREE.Mesh
        Cabin_Windows001_Starship_0: THREE.Mesh
    }
    materials: {
        Starship: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/aeronautics/spacex_starship/scene.gltf') as unknown as GLTFResult
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
                <group position={[0, 42.38, -5293.18]} rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[-Math.PI, 0, 0]}>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Bow_Window001_Starship_0.geometry}
                                material={nodes.Bow_Window001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Primary_Hull001_Starship_0.geometry}
                                material={nodes.Primary_Hull001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cargo_Doors001_Starship_0.geometry}
                                material={nodes.Cargo_Doors001_Starship_0.material}
                            />
                        </group>
                        <group position={[0, 0, 123.11]} rotation={[0, 0, Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
                            <mesh
                                geometry={nodes.SeaLev_Raptors_LP001_Starship_0.geometry}
                                material={nodes.SeaLev_Raptors_LP001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, -Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
                            <mesh
                                geometry={nodes.Vacuum_Raptors_LP001_Starship_0.geometry}
                                material={nodes.Vacuum_Raptors_LP001_Starship_0.material}
                            />
                        </group>
                        <group position={[-1.13, -0.26, 0]} rotation={[0, 0, -Math.PI / 6]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cargo_DropBoxes001_Starship_0.geometry}
                                material={nodes.Cargo_DropBoxes001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cabin_WindowInset001_Starship_0.geometry}
                                material={nodes.Cabin_WindowInset001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cabin_Windows001_Starship_0.geometry}
                                material={nodes.Cabin_Windows001_Starship_0.material}
                            />
                        </group>
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

    if (snap.current === "Starship") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.SpaceXStarshipPayload}</h1>
                <h1 className="text-xl">{t.SpaceXStarshipPayloadDetails}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t.SpaceXStarshipKnowMore}</h1>
                {/* <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">{t.modelView}<span className="md:hidden"> {t.modelViewResponsive}</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="/aeronautics/dragon2qr.jpeg" width="250" height="250" alt="Aeronautics QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/Kn7b" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">{t.modelViewInAR}</button>
                    </a>
                </div> */}
            </div>
        )
    }
}

export default function Starship() {

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
                    {t.SpaceXStarship}
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.SpaceXStarshipDesc}</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <div className="lg:hidden">
                        <ARButton />
                    </div>
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <XR>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.0003} />
                                {/* <Environment preset="city" /> */}
                            </Suspense>
                            {/* <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
                            <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                        </XR>
                    </Canvas>
                </div>

                <div className="mt-56 md:mt-0 md:col-span-1 p-4 grid place-items-center">
                    <Details />
                </div>

            </div>

        </div>

    )
}
