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
        Object_4: THREE.Mesh
        Object_5: THREE.Mesh
        Object_7: THREE.Mesh
        Object_8: THREE.Mesh
        Object_10: THREE.Mesh
        Object_12: THREE.Mesh
        Object_14: THREE.Mesh
        Object_16: THREE.Mesh
        Object_17: THREE.Mesh
        Object_18: THREE.Mesh
        Object_20: THREE.Mesh
        Object_21: THREE.Mesh
        Object_23: THREE.Mesh
        Object_24: THREE.Mesh
        Object_26: THREE.Mesh
        Object_28: THREE.Mesh
        Object_30: THREE.Mesh
        Object_31: THREE.Mesh
        Object_33: THREE.Mesh
        Object_35: THREE.Mesh
        Object_37: THREE.Mesh
        Object_39: THREE.Mesh
        Object_41: THREE.Mesh
        Object_43: THREE.Mesh
        Object_44: THREE.Mesh
        Object_45: THREE.Mesh
        Object_47: THREE.Mesh
        Object_48: THREE.Mesh
        Object_49: THREE.Mesh
        Object_51: THREE.Mesh
        Object_52: THREE.Mesh
        Object_53: THREE.Mesh
        Object_55: THREE.Mesh
        Object_56: THREE.Mesh
        Object_57: THREE.Mesh
        Object_61: THREE.Mesh
        Object_62: THREE.Mesh
        Object_64: THREE.Mesh
        Object_65: THREE.Mesh
        Object_67: THREE.Mesh
        Object_68: THREE.Mesh
        Object_70: THREE.Mesh
        Object_71: THREE.Mesh
        Object_73: THREE.Mesh
        Object_74: THREE.Mesh
        Object_76: THREE.Mesh
        Object_77: THREE.Mesh
        Object_79: THREE.Mesh
        Object_81: THREE.Mesh
        Object_84: THREE.Mesh
        Object_85: THREE.Mesh
        Object_86: THREE.Mesh
        Object_87: THREE.Mesh
    }
    materials: {
        VMtl003: THREE.MeshStandardMaterial
        VMtl001: THREE.MeshStandardMaterial
        VMtl002: THREE.MeshStandardMaterial
        VMtl005: THREE.MeshStandardMaterial
        material: THREE.MeshStandardMaterial
        blue: THREE.MeshStandardMaterial
        ['VMtl002.001']: THREE.MeshStandardMaterial
        ['VMtl001.001']: THREE.MeshStandardMaterial
        ['VMtl003.001']: THREE.MeshStandardMaterial
        ['VMtl005.001']: THREE.MeshStandardMaterial
        BLACK: THREE.MeshStandardMaterial
        blue_light: THREE.MeshStandardMaterial
        Pink: THREE.MeshStandardMaterial
        Green: THREE.MeshStandardMaterial
    }
}

type ActionName = 'Animation'
type GLTFActions = Record<ActionName, THREE.AnimationAction>
type ModelProps = JSX.IntrinsicElements['group'];

function Model({ isAnimationPlaying, toggleAnimation, ...props }: ModelProps) {
    const group = useRef<THREE.Group>()
    const { nodes, materials, animations } = useGLTF('/chemistry/hf_molecular_orbital_diagram/scene.glb') as GLTFResult
    const { actions } = useAnimations<GLTFActions>(animations, group)

    useEffect(() => {
        if (isAnimationPlaying) {
            actions['Animation'].play().timeScale = 1.5;
            actions['Animation'].paused = false;
        } else {
            actions['Animation'].paused = true;
            // actions['Animation'].stop();
        }
    }, [isAnimationPlaying]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="hydrogen_0" position={[-0.659, 1.952, 0.013]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.VMtl003} />
                                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.VMtl001} />
                            </group>
                            <group name="fluorine_1" position={[-0.531, 1.956, 0.012]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.VMtl002} />
                                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.VMtl005} />
                            </group>
                            <group name="orbital_2" position={[-0.463, 1.94, 0.021]} rotation={[-3.12, 0.801, 3.112]} scale={0.014}>
                                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material} />
                            </group>
                            <group name="orbital001_3" position={[-0.511, 1.958, 0.012]} rotation={[-3.12, 0.801, 3.112]} scale={0.014}>
                                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.blue} />
                            </group>
                            <group name="Orbital_4" position={[-0.525, 1.962, -0.009]} rotation={[-3.12, 0.801, 3.112]} scale={0.015}>
                                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.material} />
                            </group>
                            <group name="orbital002_5" position={[0.729, 0.484, 0.011]} rotation={[-0.052, -0.784, -0.073]} scale={0.018}>
                                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material} />
                                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.blue} />
                                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['VMtl002.001']} />
                            </group>
                            <group name="hydrogen001_6" position={[-0.69, -0.58, 0.191]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['VMtl001.001']} />
                                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['VMtl003.001']} />
                            </group>
                            <group name="fluorine001_7" position={[-0.515, -0.576, 0.192]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials['VMtl002.001']} />
                                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['VMtl005.001']} />
                            </group>
                            <group name="Orbital001_8" position={[-0.468, -0.573, 0.174]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.blue} />
                            </group>
                            <group name="Orbital002_9" position={[-0.458, -0.568, 0.176]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.material} />
                            </group>
                            <group name="hydrogen003_10" position={[-2.246, 1.135, 0.002]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['VMtl001.001']} />
                                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['VMtl003.001']} />
                            </group>
                            <group name="s_atomic_orbital002_11" position={[-0.463, -0.903, 0.004]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.material} />
                            </group>
                            <group name="s_atomic_orbital003_12" position={[-2.246, 1.135, 0.002]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.material} />
                            </group>
                            <group name="fluorine004_13" position={[-0.463, -0.903, 0.004]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials['VMtl002.001']} />
                            </group>
                            <group name="s_atomic_orbital004_14" position={[1.152, -0.927, 0.004]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.material} />
                            </group>
                            <group name="fluorine005_15" position={[1.152, -0.927, 0.004]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials['VMtl002.001']} />
                            </group>
                            <group name="fluorine003_16" position={[2.271, 0.631, 0.02]} rotation={[-0.766, 0, -Math.PI / 2]} scale={0.018}>
                                <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials['VMtl002.001']} />
                                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.material} />
                                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.blue} />
                            </group>
                            <group name="fluorine002_17" position={[-0.128, 0.627, 0.02]} rotation={[-0.766, 0, -Math.PI / 2]} scale={0.018}>
                                <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials['VMtl002.001']} />
                                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.material} />
                                <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.blue} />
                            </group>
                            <group name="fluorine006_18" position={[1.46, 0.49, 0.02]} rotation={[0.804, 0, -Math.PI / 2]} scale={0.018}>
                                <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials['VMtl002.001']} />
                                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.material} />
                                <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.blue} />
                            </group>
                            <group name="fluorine007_19" position={[-0.873, 0.539, 0.02]} rotation={[0.804, 0, -Math.PI / 2]} scale={0.018}>
                                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials['VMtl002.001']} />
                                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.material} />
                                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.blue} />
                            </group>
                            <group name="HF_Bonding__33" position={[-1.811, 2.079, 0]}>
                                <group name="All_bonding,_antibonding_and_non_bonding_orbitals_29" position={[3.916, -0.218, 0]}>
                                    <group name="Antibonding_20" position={[-0.404, -0.068, -0.054]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                        <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.material} />
                                        <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.blue} />
                                    </group>
                                    <group name="Bonding_orbital_21" position={[-0.415, -0.072, -0.057]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                        <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.blue} />
                                        <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.material} />
                                    </group>
                                    <group name="fluorine008_22" position={[-0.381, -0.076, -0.038]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                        <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials['VMtl002.001']} />
                                        <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials['VMtl005.001']} />
                                    </group>
                                    <group name="hydrogen002_23" position={[-0.556, -0.08, -0.039]} rotation={[-3.12, 0.801, 3.112]} scale={0.018}>
                                        <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['VMtl001.001']} />
                                        <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials['VMtl003.001']} />
                                    </group>
                                    <group name="Non_bonding002_24" position={[-0.427, -0.075, -0.059]} rotation={[0.804, 0, -Math.PI / 2]} scale={0.018}>
                                        <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.material} />
                                        <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.blue} />
                                    </group>
                                    <group name="Non_bonding001_25" position={[-0.418, -0.037, -0.027]} rotation={[-0.766, 0, -Math.PI / 2]} scale={0.018}>
                                        <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.material} />
                                        <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials.blue} />
                                    </group>
                                    <group name="Non_bonding_26" position={[-0.412, -0.035, -0.06]} rotation={[-0.022, -0.801, -0.03]} scale={0.018}>
                                        <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.material} />
                                    </group>
                                    <group name="text001_28" position={[-0.913, -0.456, 0]} rotation={[Math.PI / 2, 0, 0]}>
                                        <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials.BLACK} />
                                    </group>
                                </group>
                                <group name="Energy_diagram001_31" position={[-0.159, -2.317, 0.115]}>
                                    <group name="Energy_diagram_30" position={[1.722, 1.841, -0.115]} rotation={[Math.PI / 2, 0, 0]}>
                                        <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.blue_light} />
                                        <mesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials.Pink} />
                                        <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.Green} />
                                        <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.BLACK} />
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

export default function HF() {
    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];
    const [isAnimationPlaying, setAnimationPlaying] = useState(false);

    const toggleAnimation = () => {
        setAnimationPlaying((prevState) => !prevState);
    };

    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/chemistry" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl lowercase" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    {t.goBack}
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    {t.HF}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.HFDetails}</div>
            </motion.div>

            <div className="md:pr-15 md:px-16 px-4 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block relative">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.4} />
                        <Suspense fallback={null}>
                            <Model isAnimationPlaying={isAnimationPlaying} toggleAnimation={toggleAnimation} scale={0.8} />
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

            </div>

        </div>
    )
}
