import React, { Suspense, useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BiArrowBack } from "react-icons/bi"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { motion } from "framer-motion"
import { fade } from "../../../animations"
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
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
        Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0: THREE.Mesh
        VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1: THREE.Mesh
        FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1: THREE.Mesh
        Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0: THREE.Mesh
        MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
    }
    materials: {
        pasted__lambert5: THREE.MeshStandardMaterial
        pasted__phong3: THREE.MeshStandardMaterial
    }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const state = proxy({
    current: null,
})

type ModelProps = JSX.IntrinsicElements['group'];
function Model({ isAnimationPlaying, toggleAnimation, ...props }: ModelProps) {
    const group = useRef<THREE.Group>()
    const { nodes, materials, animations } = useGLTF('/biology/visible_interactive_human_-_exploding_skull/scene.gltf') as GLTFResult
    const { actions } = useAnimations<GLTFActions>(animations, group)
    const [hovered, set] = useState(null)

    useEffect(() => {
        if (isAnimationPlaying) {
            actions['Take 001'].play();
            actions['Take 001'].paused = false;
        } else {
            actions['Take 001'].paused = true;
            // actions['Take 001'].stop();
        }
    }, [isAnimationPlaying]);

    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group name="OSG_Scene" className="cursor-pointer">
                <group name="RootNode_(gltf_orientation_matrix)" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="RootNode_(model_correction_matrix)">
                        <group name="6718520e2371433bb7cfd89944ea6d9efbx" rotation={[Math.PI / 2, 0, 0]}>
                            <group>
                                <group name="RootNode">
                                    <group name="_UNKNOWN_REF_NODE_fosterParent1">
                                        <group name="Skull" position={[-0.249, 5.881, 0.961]} rotation={[-2.352, 0.002, -0.08]}>
                                            <group name="Cranium">
                                                <group name="Left_zygomaticSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.028, -0.013, -0.015]}>
                                                    <mesh name="Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="OccipitalSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.002, 0.023, 0.009]}>
                                                    <mesh name="OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Right_lacrimalSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.006, -0.008, -0.007]}>
                                                    <mesh name="Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Right_maxSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.02, -0.002, 0]}>
                                                    <mesh name="Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="right_nasalSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.008, -0.023, -0.022]}>
                                                    <mesh name="right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="right_palatineSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.016, 0.013, -0.014]}>
                                                    <mesh name="right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Right_ParietalSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.022, -0.011, 0.009]}>
                                                    <mesh name="Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Right_temporalSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.023, -0.002, 0]}>
                                                    <mesh name="Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Right_zygomaticSTL_Output_from_geomagic_Studio_________________________________________________" position={[-0.022, -0.016, -0.014]}>
                                                    <mesh name="Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="TeethSTL_Output_from_geomagic_Studio_________________________________________________" position={[0, -0.002, -0.015]}>
                                                    <mesh name="TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0" geometry={nodes.TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0.geometry} material={materials.pasted__phong3} />
                                                </group>
                                                <group name="VomerSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.001, -0.01, -0.021]}>
                                                    <mesh name="VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="EthmoidSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.001, -0.008, -0.008]}>
                                                    <mesh name="EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                    <mesh name="EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1" geometry={nodes.EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="FrontalSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.004, -0.044, -0.008]}>
                                                    <mesh name="FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Inferior_conchaeSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.002, -0.02, -0.02]}>
                                                    <mesh name="Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="left_lacrimalSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.008, -0.007, -0.007]}>
                                                    <mesh name="left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Left_maxillaSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.021, 0.002, 0]}>
                                                    <mesh name="Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                    <mesh name="Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1" geometry={nodes.Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Left_nasalSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.008, -0.022, -0.022]}>
                                                    <mesh name="Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Left_palatineSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.01, 0.015, -0.014]}>
                                                    <mesh name="Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="Left_parietalSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.023, -0.015, 0.017]}>
                                                    <mesh name="Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="left_temporalSTL_Output_from_geomagic_Studio_________________________________________________" position={[0.039, 0.003, 0]}>
                                                    <mesh name="left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                                <group name="SphenoidSTL_Output_from_geomagic_Studio_________________________________________________">
                                                    <mesh name="SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                            </group>
                                            <group name="Mandible1" position={[-0.418, -1.66, 0.931]} rotation={[-0.154, 0.022, 0.045]}>
                                                <group name="Lower_teethSTL_Output_from_geomagic_Studio_________________________________________________" position={[0, 0.01, -0.02]}>
                                                    <mesh name="Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0" geometry={nodes.Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0.geometry} material={materials.pasted__phong3} />
                                                </group>
                                                <group name="MandibleSTL_Output_from_geomagic_Studio_________________________________________________" position={[0, 0.027, -0.02]}>
                                                    <mesh name="MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0" geometry={nodes.MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0.geometry} material={materials.pasted__lambert5} />
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
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

    if (snap.current === "pasted__phong3") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.HumanSkullTeeth}</h1>
                <h1 className="text-xl ">{t.HumanSkullTeethDetails}</h1>
            </div>
        )
    }
    else if (snap.current === "pasted__lambert5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.HumanSkullFrontalBone}</h1>
                <h1 className="text-xl">{t.HumanSkullFrontalBoneDetails}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t.HumanSkullKnowMore}</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">{t.modelView}<span className="md:hidden"> {t.modelViewResponsive}</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="/biology/skullQR.png" width="250" height="250" alt="Skull QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/4SKp" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">{t.modelViewInAR}</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Skull() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];
    const [isAnimationPlaying, setAnimationPlaying] = useState(false);

    const toggleAnimation = () => {
        setAnimationPlaying((prevState) => !prevState);
    };

    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/biology" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl lowercase" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    {t.goBack}
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    {t.HumanSkull}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.HumanSkullDesc}</div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block relative">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.4} />
                        <Suspense fallback={null}>
                            <Model isAnimationPlaying={isAnimationPlaying} toggleAnimation={toggleAnimation} scale={0.07} />
                            {/* <Environment preset="city" /> */}
                        </Suspense>
                        {/* <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
                        <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                    <button onClick={toggleAnimation} className="absolute top-0 right-2 m-2 bg-secondary px-2 py-1 rounded-md flex flex-row">
                        {isAnimationPlaying ? `${t.pauseAnimation}` : `${t.playAnimation}`}
                        {isAnimationPlaying ? <BsFillPauseFill className="ml-2 mt-1" /> : <BsFillPlayFill className="ml-2 mt-1" />}
                    </button>
                </div>


                <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </div>
    )
}
