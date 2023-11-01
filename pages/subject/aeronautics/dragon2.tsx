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
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
        mesh_4: THREE.Mesh
        mesh_5: THREE.Mesh
        mesh_6: THREE.Mesh
        mesh_7: THREE.Mesh
        mesh_8: THREE.Mesh
    }
    materials: {
        draco_thruster: THREE.MeshStandardMaterial
        grey_plastic: THREE.MeshStandardMaterial
        ground: THREE.MeshStandardMaterial
        shiny_metal: THREE.MeshStandardMaterial
        windows: THREE.MeshStandardMaterial
        body: THREE.MeshStandardMaterial
        heatshield: THREE.MeshStandardMaterial
        trunk: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/aeronautics/spacex_dragon_2_exterior/scene.gltf') as unknown as GLTFResult
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.draco_thruster} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.grey_plastic} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.ground} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials.shiny_metal} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.windows} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                <mesh geometry={nodes.mesh_7.geometry} material={materials.heatshield} />
                <mesh geometry={nodes.mesh_8.geometry} material={materials.trunk} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    if (snap.current === "body") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.SpaceXDragon2Capsule}</h1>
                <h1 className="text-xl ">{t.SpaceXDragon2CapsuleDetails}</h1>
            </div>
        )
    }
    else if (snap.current === "heatshield") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.SpaceXDragon2HeatShield}</h1>
                <h1 className="text-xl">{t.SpaceXDragon2HeatShieldDetails}</h1>
            </div>
        )
    }
    else if (snap.current === "trunk") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.SpaceXDragon2Trunk}</h1>
                <h1 className="text-xl">{t.SpaceXDragon2TrunkDetaills}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t.aeronauticsKnowMore}</h1>
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

export default function Dragon2() {

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
                    {t.SpaceXDragon2}
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.SpaceXDragon2Desc}</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.3} />
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
