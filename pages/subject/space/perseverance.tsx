import React, { Suspense, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { BiArrowBack } from "react-icons/bi"
import { motion } from "framer-motion"
import { fade } from "../../../animations"
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
        mesh_9: THREE.Mesh
        mesh_10: THREE.Mesh
        mesh_11: THREE.Mesh
        mesh_12: THREE.Mesh
        mesh_13: THREE.Mesh
        mesh_14: THREE.Mesh
        mesh_15: THREE.Mesh
        mesh_16: THREE.Mesh
        mesh_17: THREE.Mesh
        mesh_18: THREE.Mesh
        mesh_19: THREE.Mesh
        mesh_20: THREE.Mesh
        mesh_21: THREE.Mesh
        mesh_22: THREE.Mesh
        mesh_23: THREE.Mesh
        mesh_24: THREE.Mesh
        mesh_25: THREE.Mesh
        mesh_26: THREE.Mesh
        mesh_27: THREE.Mesh
        mesh_28: THREE.Mesh
        mesh_29: THREE.Mesh
        mesh_30: THREE.Mesh
        mesh_31: THREE.Mesh
        mesh_32: THREE.Mesh
        mesh_33: THREE.Mesh
        mesh_34: THREE.Mesh
        mesh_35: THREE.Mesh
        mesh_36: THREE.Mesh
        mesh_37: THREE.Mesh
        mesh_38: THREE.Mesh
        mesh_70: THREE.Mesh
        mesh_71: THREE.Mesh
        mesh_72: THREE.Mesh
        mesh_73: THREE.Mesh
        mesh_74: THREE.Mesh
        mesh_75: THREE.Mesh
        mesh_77: THREE.Mesh
        mesh_78: THREE.Mesh
        mesh_76: THREE.Mesh
        mesh_79: THREE.Mesh
        mesh_80: THREE.Mesh
        mesh_81: THREE.Mesh
        mesh_82: THREE.Mesh
        mesh_83: THREE.Mesh
        mesh_84: THREE.Mesh
        mesh_85: THREE.Mesh
        mesh_86: THREE.Mesh
        mesh_87: THREE.Mesh
        mesh_88: THREE.Mesh
        mesh_89: THREE.Mesh
        mesh_90: THREE.Mesh
        mesh_91: THREE.Mesh
        mesh_92: THREE.Mesh
        mesh_93: THREE.Mesh
        mesh_94: THREE.Mesh
        mesh_95: THREE.Mesh
        mesh_60: THREE.Mesh
        mesh_61: THREE.Mesh
        mesh_62: THREE.Mesh
        mesh_63: THREE.Mesh
        mesh_64: THREE.Mesh
        mesh_65: THREE.Mesh
        mesh_66: THREE.Mesh
        mesh_67: THREE.Mesh
        mesh_68: THREE.Mesh
        mesh_69: THREE.Mesh
        mesh_58: THREE.Mesh
        mesh_59: THREE.Mesh
        mesh_50: THREE.Mesh
        mesh_51: THREE.Mesh
        mesh_52: THREE.Mesh
        mesh_53: THREE.Mesh
        mesh_54: THREE.Mesh
        mesh_55: THREE.Mesh
        mesh_56: THREE.Mesh
        mesh_57: THREE.Mesh
        mesh_43: THREE.Mesh
        mesh_44: THREE.Mesh
        mesh_45: THREE.Mesh
        mesh_46: THREE.Mesh
        mesh_47: THREE.Mesh
        mesh_48: THREE.Mesh
        mesh_49: THREE.Mesh
        mesh_39: THREE.Mesh
        mesh_40: THREE.Mesh
        mesh_41: THREE.Mesh
        mesh_42: THREE.Mesh
        mesh_96: THREE.Mesh
        mesh_97: THREE.Mesh
        mesh_98: THREE.Mesh
        mesh_99: THREE.Mesh
        mesh_100: THREE.Mesh
        mesh_101: THREE.Mesh
        mesh_102: THREE.Mesh
        mesh_103: THREE.Mesh
        mesh_104: THREE.Mesh
        mesh_105: THREE.Mesh
        mesh_106: THREE.Mesh
        mesh_107: THREE.Mesh
        mesh_108: THREE.Mesh
        mesh_109: THREE.Mesh
        mesh_110: THREE.Mesh
        mesh_111: THREE.Mesh
        mesh_112: THREE.Mesh
        mesh_113: THREE.Mesh
        mesh_114: THREE.Mesh
        mesh_115: THREE.Mesh
        mesh_116: THREE.Mesh
        mesh_117: THREE.Mesh
        mesh_118: THREE.Mesh
        mesh_119: THREE.Mesh
        mesh_120: THREE.Mesh
        mesh_121: THREE.Mesh
        mesh_122: THREE.Mesh
        mesh_123: THREE.Mesh
        mesh_124: THREE.Mesh
        mesh_125: THREE.Mesh
        mesh_126: THREE.Mesh
        mesh_127: THREE.Mesh
        mesh_128: THREE.Mesh
        mesh_129: THREE.Mesh
        mesh_130: THREE.Mesh
        mesh_131: THREE.Mesh
        mesh_132: THREE.Mesh
        mesh_133: THREE.Mesh
        mesh_134: THREE.Mesh
        mesh_135: THREE.Mesh
        mesh_136: THREE.Mesh
        mesh_137: THREE.Mesh
        mesh_138: THREE.Mesh
        mesh_139: THREE.Mesh
        mesh_140: THREE.Mesh
        mesh_141: THREE.Mesh
        mesh_142: THREE.Mesh
        mesh_151: THREE.Mesh
        mesh_152: THREE.Mesh
        mesh_153: THREE.Mesh
        mesh_154: THREE.Mesh
        mesh_155: THREE.Mesh
        mesh_156: THREE.Mesh
        mesh_157: THREE.Mesh
        mesh_158: THREE.Mesh
        mesh_159: THREE.Mesh
        mesh_160: THREE.Mesh
        mesh_161: THREE.Mesh
        mesh_162: THREE.Mesh
        mesh_163: THREE.Mesh
        mesh_164: THREE.Mesh
        mesh_165: THREE.Mesh
        mesh_166: THREE.Mesh
        mesh_143: THREE.Mesh
        mesh_144: THREE.Mesh
        mesh_145: THREE.Mesh
        mesh_146: THREE.Mesh
        mesh_147: THREE.Mesh
        mesh_148: THREE.Mesh
        mesh_149: THREE.Mesh
        mesh_150: THREE.Mesh
        mesh_176: THREE.Mesh
        mesh_177: THREE.Mesh
        mesh_178: THREE.Mesh
        mesh_179: THREE.Mesh
        mesh_180: THREE.Mesh
        mesh_181: THREE.Mesh
        mesh_182: THREE.Mesh
        mesh_183: THREE.Mesh
        mesh_184: THREE.Mesh
        mesh_185: THREE.Mesh
        mesh_186: THREE.Mesh
        mesh_187: THREE.Mesh
        mesh_188: THREE.Mesh
        mesh_189: THREE.Mesh
        mesh_190: THREE.Mesh
        mesh_191: THREE.Mesh
        mesh_192: THREE.Mesh
        mesh_193: THREE.Mesh
        mesh_167: THREE.Mesh
        mesh_168: THREE.Mesh
        mesh_169: THREE.Mesh
        mesh_170: THREE.Mesh
        mesh_171: THREE.Mesh
        mesh_172: THREE.Mesh
        mesh_173: THREE.Mesh
        mesh_174: THREE.Mesh
        mesh_175: THREE.Mesh
        mesh_194: THREE.Mesh
        mesh_195: THREE.Mesh
        mesh_196: THREE.Mesh
        mesh_197: THREE.Mesh
        mesh_198: THREE.Mesh
        mesh_199: THREE.Mesh
        mesh_200: THREE.Mesh
        mesh_201: THREE.Mesh
        mesh_202: THREE.Mesh
        mesh_203: THREE.Mesh
        mesh_206: THREE.Mesh
        mesh_205: THREE.Mesh
        mesh_204: THREE.Mesh
        mesh_209: THREE.Mesh
        mesh_210: THREE.Mesh
        mesh_211: THREE.Mesh
        mesh_208: THREE.Mesh
        mesh_207: THREE.Mesh
        mesh_212: THREE.Mesh
        mesh_213: THREE.Mesh
        mesh_214: THREE.Mesh
        mesh_215: THREE.Mesh
        mesh_216: THREE.Mesh
        mesh_217: THREE.Mesh
        mesh_218: THREE.Mesh
        mesh_219: THREE.Mesh
        mesh_220: THREE.Mesh
        mesh_221: THREE.Mesh
        mesh_222: THREE.Mesh
        mesh_223: THREE.Mesh
        mesh_224: THREE.Mesh
        mesh_225: THREE.Mesh
        mesh_226: THREE.Mesh
        mesh_227: THREE.Mesh
        mesh_228: THREE.Mesh
        mesh_229: THREE.Mesh
        mesh_230: THREE.Mesh
        mesh_231: THREE.Mesh
        mesh_232: THREE.Mesh
        mesh_233: THREE.Mesh
        mesh_234: THREE.Mesh
        mesh_235: THREE.Mesh
        mesh_236: THREE.Mesh
        mesh_237: THREE.Mesh
        mesh_238: THREE.Mesh
        mesh_239: THREE.Mesh
        mesh_240: THREE.Mesh
        mesh_241: THREE.Mesh
        mesh_242: THREE.Mesh
        mesh_243: THREE.Mesh
        mesh_244: THREE.Mesh
        mesh_245: THREE.Mesh
        mesh_246: THREE.Mesh
        mesh_247: THREE.Mesh
        mesh_248: THREE.Mesh
    }
    materials: {
        mars_2020_03: THREE.MeshStandardMaterial
        mars_2020_01: THREE.MeshStandardMaterial
        mars_2020_04: THREE.MeshStandardMaterial
        mars_2020_02: THREE.MeshStandardMaterial
        paint_white_base: THREE.MeshStandardMaterial
        mars_2020_04_aluminum_r: THREE.MeshStandardMaterial
        aluminum_black: THREE.MeshStandardMaterial
        mars_2020_05: THREE.MeshStandardMaterial
        aluminum: THREE.MeshStandardMaterial
        spring: THREE.MeshStandardMaterial
        mars_2020_06_brass2: THREE.MeshStandardMaterial
        ['aluminum_black.001']: THREE.MeshStandardMaterial
        ['mars_2020_04.001']: THREE.MeshStandardMaterial
        grey_brushed: THREE.MeshStandardMaterial
        material: THREE.MeshStandardMaterial
        gunmetal: THREE.MeshStandardMaterial
        mars_2020_05_gunmetal: THREE.MeshStandardMaterial
        gunmetal_dark: THREE.MeshStandardMaterial
        gray_krinkle: THREE.MeshStandardMaterial
        mars_2020_gunmetal_dark: THREE.MeshStandardMaterial
        glass_2: THREE.MeshStandardMaterial
        glass_lens: THREE.MeshStandardMaterial
        transparent: THREE.MeshStandardMaterial
        iron: THREE.MeshStandardMaterial
        Material: THREE.MeshStandardMaterial
        foil_orange: THREE.MeshStandardMaterial
        bronze: THREE.MeshStandardMaterial
        mars_2020_07: THREE.MeshStandardMaterial
        mars_2020_06: THREE.MeshStandardMaterial
        arm_graphics: THREE.MeshStandardMaterial
        mars_2020_02_n: THREE.MeshStandardMaterial
        mars_2020_05_aluminum: THREE.MeshStandardMaterial
        mars_2020_05_brass: THREE.MeshStandardMaterial
        mars_2020_05_cooling_lines: THREE.MeshStandardMaterial
        copper: THREE.MeshStandardMaterial
        array_gold_trim: THREE.MeshStandardMaterial
        gold: THREE.MeshStandardMaterial
        black_krinkle: THREE.MeshStandardMaterial
        brass: THREE.MeshStandardMaterial
        nameplate: THREE.MeshStandardMaterial
        mars_2020_01_n: THREE.MeshStandardMaterial
        ['aluminum.003']: THREE.MeshStandardMaterial
        ['mars_2020_03.002']: THREE.MeshStandardMaterial
        ['aluminum.001']: THREE.MeshStandardMaterial
        blades: THREE.MeshStandardMaterial
        mars_2020_06_n: THREE.MeshStandardMaterial
        covidPlaque: THREE.MeshStandardMaterial
        sample_handling_door: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/space/perseverance/scene.gltf') as GLTFResult
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
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                        <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                    </group>
                    <group position={[-0.08, 0.72, 0.97]}>
                        <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                        <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
                        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
                        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
                        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                    </group>
                    <group position={[0.09, 0.68, 0.98]}>
                        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                        <mesh geometry={nodes.mesh_13.geometry} material={materials['mars_2020_04.001']} />
                    </group>
                    <group position={[0.47, 0.78, -1.14]}>
                        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                        <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
                        <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
                        <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
                        <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
                        <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
                        <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
                    </group>
                    <group position={[0.51, 0.82, -1.22]} rotation={[-Math.PI / 4, -0.38, 0]}>
                        <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
                        <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
                    </group>
                    <group position={[-0.51, 0.82, -1.22]} rotation={[2.36, -0.38, -Math.PI]}>
                        <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
                        <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
                    </group>
                    <group position={[0.47, 0.78, -1.14]}>
                        <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
                    </group>
                    <group position={[0.61, 1.01, -0.3]}>
                        <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
                    </group>
                    <group position={[0, 0.26, -0.03]}>
                        <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
                        <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
                        <mesh geometry={nodes.mesh_29.geometry} material={materials.material} />
                    </group>
                    <group position={[0, 0.71, -0.03]}>
                        <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
                        <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
                        <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
                        <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
                        <mesh geometry={nodes.mesh_34.geometry} material={materials.gray_krinkle} />
                        <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
                        <mesh geometry={nodes.mesh_36.geometry} material={materials.mars_2020_gunmetal_dark} />
                    </group>
                    <group position={[-0.01, 0.96, 1.12]} rotation={[-Math.PI, 0, 0]} scale={0.03}>
                        <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
                        <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                    </group>
                    <group position={[0.45, 0.91, 1.18]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[0.03, 0.03, 0.03]}>
                        <group position={[-4.95, 2.75, 2.32]} rotation={[0, 0, -0.28]}>
                            <group position={[-23.49, -6.82, 0.65]} rotation={[0, 0, -1.26]}>
                                <group position={[22.47, -0.72, 0.57]} rotation={[0, 0, 1.54]}>
                                    <group position={[5.24, -4.55, 1.8]} rotation={[-3.14, -1.41, 0]} scale={[29.85, 29.85, 29.85]}>
                                        <group position={[-0.03, 0.18, 0.23]}>
                                            <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} />
                                            <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} />
                                        </group>
                                        <group position={[0.29, 0.17, 0.17]} rotation={[-Math.PI, 0.02, -Math.PI]}>
                                            <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} />
                                            <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} />
                                        </group>
                                        <group position={[0.33, 0.22, -0.09]} rotation={[-Math.PI, 0.02, -Math.PI]}>
                                            <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} />
                                            <mesh geometry={nodes.mesh_75.geometry} material={nodes.mesh_75.material} />
                                        </group>
                                        <group position={[-0.32, 0.14, -0.04]} rotation={[2.49, -1.37, 0.93]}>
                                            <group rotation={[-1.41, -0.02, -1.69]}>
                                                <mesh geometry={nodes.mesh_77.geometry} material={nodes.mesh_77.material} />
                                                <mesh geometry={nodes.mesh_78.geometry} material={nodes.mesh_78.material} />
                                            </group>
                                            <mesh geometry={nodes.mesh_76.geometry} material={nodes.mesh_76.material} />
                                        </group>
                                        <group position={[-0.24, 0.17, -0.04]}>
                                            <mesh geometry={nodes.mesh_79.geometry} material={nodes.mesh_79.material} />
                                            <mesh geometry={nodes.mesh_80.geometry} material={nodes.mesh_80.material} />
                                            <mesh geometry={nodes.mesh_81.geometry} material={nodes.mesh_81.material} />
                                        </group>
                                        <group position={[0.23, 0.18, 0.05]}>
                                            <mesh geometry={nodes.mesh_82.geometry} material={nodes.mesh_82.material} />
                                            <mesh geometry={nodes.mesh_83.geometry} material={nodes.mesh_83.material} />
                                            <mesh geometry={nodes.mesh_84.geometry} material={nodes.mesh_84.material} />
                                            <mesh geometry={nodes.mesh_85.geometry} material={nodes.mesh_85.material} />
                                        </group>
                                        <group position={[0.23, 0.18, 0.05]}>
                                            <mesh geometry={nodes.mesh_86.geometry} material={nodes.mesh_86.material} />
                                            <mesh geometry={nodes.mesh_87.geometry} material={nodes.mesh_87.material} />
                                        </group>
                                        <group position={[0.23, 0.18, 0.05]}>
                                            <mesh geometry={nodes.mesh_88.geometry} material={nodes.mesh_88.material} />
                                        </group>
                                        <group position={[0.23, 0.18, 0.05]}>
                                            <mesh geometry={nodes.mesh_89.geometry} material={nodes.mesh_89.material} />
                                            <mesh geometry={nodes.mesh_90.geometry} material={nodes.mesh_90.material} />
                                            <mesh geometry={nodes.mesh_91.geometry} material={nodes.mesh_91.material} />
                                        </group>
                                        <group position={[0.31, 0.19, -0.06]}>
                                            <mesh geometry={nodes.mesh_92.geometry} material={nodes.mesh_92.material} />
                                            <mesh geometry={nodes.mesh_93.geometry} material={nodes.mesh_93.material} />
                                            <mesh geometry={nodes.mesh_94.geometry} material={nodes.mesh_94.material} />
                                            <mesh geometry={nodes.mesh_95.geometry} material={nodes.mesh_95.material} />
                                        </group>
                                        <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
                                        <mesh geometry={nodes.mesh_61.geometry} material={nodes.mesh_61.material} />
                                        <mesh geometry={nodes.mesh_62.geometry} material={materials.Material} />
                                        <mesh geometry={nodes.mesh_63.geometry} material={nodes.mesh_63.material} />
                                        <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_64.material} />
                                        <mesh geometry={nodes.mesh_65.geometry} material={nodes.mesh_65.material} />
                                        <mesh geometry={nodes.mesh_66.geometry} material={nodes.mesh_66.material} />
                                        <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_67.material} />
                                        <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} />
                                        <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} />
                                    </group>
                                    <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
                                    <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
                                </group>
                                <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
                                <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
                                <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
                                <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
                                <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
                                <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
                                <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
                                <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
                            </group>
                            <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
                            <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
                            <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
                            <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
                            <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
                            <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
                            <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
                        </group>
                        <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
                        <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
                        <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
                        <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
                    </group>
                    <group position={[-0.02, 1.13, 0.81]} rotation={[2.71, -0.77, 0.43]} scale={[0.14, 0.25, 0.14]}>
                        <mesh geometry={nodes.mesh_96.geometry} material={nodes.mesh_96.material} />
                        <mesh geometry={nodes.mesh_97.geometry} material={materials.mars_2020_05_aluminum} />
                        <mesh geometry={nodes.mesh_98.geometry} material={materials.mars_2020_05_brass} />
                        <mesh geometry={nodes.mesh_99.geometry} material={nodes.mesh_99.material} />
                        <mesh geometry={nodes.mesh_100.geometry} material={nodes.mesh_100.material} />
                        <mesh geometry={nodes.mesh_101.geometry} material={nodes.mesh_101.material} />
                        <mesh geometry={nodes.mesh_102.geometry} material={nodes.mesh_102.material} />
                        <mesh geometry={nodes.mesh_103.geometry} material={nodes.mesh_103.material} />
                        <mesh geometry={nodes.mesh_104.geometry} material={nodes.mesh_104.material} />
                    </group>
                    <group position={[0, 1.16, -1.25]}>
                        <mesh geometry={nodes.mesh_105.geometry} material={nodes.mesh_105.material} />
                        <mesh geometry={nodes.mesh_106.geometry} material={materials.mars_2020_05_cooling_lines} />
                        <mesh geometry={nodes.mesh_107.geometry} material={nodes.mesh_107.material} />
                        <mesh geometry={nodes.mesh_108.geometry} material={nodes.mesh_108.material} />
                        <mesh geometry={nodes.mesh_109.geometry} material={nodes.mesh_109.material} />
                        <mesh geometry={nodes.mesh_110.geometry} material={materials.copper} />
                        <mesh geometry={nodes.mesh_111.geometry} material={nodes.mesh_111.material} />
                        <mesh geometry={nodes.mesh_112.geometry} material={materials.array_gold_trim} />
                        <mesh geometry={nodes.mesh_113.geometry} material={materials.gold} />
                        <mesh geometry={nodes.mesh_114.geometry} material={nodes.mesh_114.material} />
                        <mesh geometry={nodes.mesh_115.geometry} material={nodes.mesh_115.material} />
                        <mesh geometry={nodes.mesh_116.geometry} material={nodes.mesh_116.material} />
                        <mesh geometry={nodes.mesh_117.geometry} material={nodes.mesh_117.material} />
                    </group>
                    <group position={[-0.5, 1.64, -1.08]} scale={[0.08, 0.09, 0.08]}>
                        <mesh geometry={nodes.mesh_118.geometry} material={materials.black_krinkle} />
                        <mesh geometry={nodes.mesh_119.geometry} material={nodes.mesh_119.material} />
                    </group>
                    <group position={[0.42, 1.28, -0.39]}>
                        <mesh geometry={nodes.mesh_120.geometry} material={nodes.mesh_120.material} />
                        <mesh geometry={nodes.mesh_121.geometry} material={nodes.mesh_121.material} />
                        <mesh geometry={nodes.mesh_122.geometry} material={nodes.mesh_122.material} />
                        <mesh geometry={nodes.mesh_123.geometry} material={nodes.mesh_123.material} />
                    </group>
                    <group position={[0.49, 1.51, -0.94]} rotation={[-Math.PI, 0, 0]} scale={[0, 0, 0]}>
                        <mesh geometry={nodes.mesh_124.geometry} material={nodes.mesh_124.material} />
                        <mesh geometry={nodes.mesh_125.geometry} material={nodes.mesh_125.material} />
                    </group>
                    <group position={[0.61, 0.71, 0.83]}>
                        <mesh geometry={nodes.mesh_126.geometry} material={nodes.mesh_126.material} />
                        <mesh geometry={nodes.mesh_127.geometry} material={nodes.mesh_127.material} />
                        <mesh geometry={nodes.mesh_128.geometry} material={nodes.mesh_128.material} />
                    </group>
                    <group position={[-0.61, 0.72, 0.83]}>
                        <mesh geometry={nodes.mesh_129.geometry} material={nodes.mesh_129.material} />
                        <mesh geometry={nodes.mesh_130.geometry} material={nodes.mesh_130.material} />
                        <mesh geometry={nodes.mesh_131.geometry} material={nodes.mesh_131.material} />
                    </group>
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_132.geometry} material={nodes.mesh_132.material} />
                        <mesh geometry={nodes.mesh_133.geometry} material={nodes.mesh_133.material} />
                        <mesh geometry={nodes.mesh_134.geometry} material={nodes.mesh_134.material} />
                        <mesh geometry={nodes.mesh_135.geometry} material={nodes.mesh_135.material} />
                    </group>
                    <group position={[0, 0.78, -1.06]}>
                        <mesh geometry={nodes.mesh_136.geometry} material={nodes.mesh_136.material} />
                    </group>
                    <group position={[0, 1.46, -0.91]}>
                        <mesh geometry={nodes.mesh_137.geometry} material={nodes.mesh_137.material} />
                        <mesh geometry={nodes.mesh_138.geometry} material={nodes.mesh_138.material} />
                        <mesh geometry={nodes.mesh_139.geometry} material={nodes.mesh_139.material} />
                        <mesh geometry={nodes.mesh_140.geometry} material={nodes.mesh_140.material} />
                        <mesh geometry={nodes.mesh_141.geometry} material={nodes.mesh_141.material} />
                        <mesh geometry={nodes.mesh_142.geometry} material={materials.nameplate} />
                    </group>
                    <group position={[-0.63, 1.24, 0.61]}>
                        <group position={[-0.04, 0.36, 0.13]}>
                            <mesh geometry={nodes.mesh_151.geometry} material={nodes.mesh_151.material} />
                            <mesh geometry={nodes.mesh_152.geometry} material={nodes.mesh_152.material} />
                        </group>
                        <group position={[0.07, 0.25, 0.08]}>
                            <mesh geometry={nodes.mesh_153.geometry} material={nodes.mesh_153.material} />
                            <mesh geometry={nodes.mesh_154.geometry} material={nodes.mesh_154.material} />
                            <mesh geometry={nodes.mesh_155.geometry} material={nodes.mesh_155.material} />
                            <mesh geometry={nodes.mesh_156.geometry} material={nodes.mesh_156.material} />
                        </group>
                        <group position={[-0.14, 0.37, -0.06]}>
                            <mesh geometry={nodes.mesh_157.geometry} material={materials['aluminum.003']} />
                            <mesh geometry={nodes.mesh_158.geometry} material={materials['mars_2020_03.002']} />
                        </group>
                        <group position={[0.07, 0.55, 0.11]}>
                            <mesh geometry={nodes.mesh_159.geometry} material={nodes.mesh_159.material} />
                            <mesh geometry={nodes.mesh_160.geometry} material={nodes.mesh_160.material} />
                            <mesh geometry={nodes.mesh_161.geometry} material={nodes.mesh_161.material} />
                            <mesh geometry={nodes.mesh_162.geometry} material={nodes.mesh_162.material} />
                            <mesh geometry={nodes.mesh_163.geometry} material={nodes.mesh_163.material} />
                            <mesh geometry={nodes.mesh_164.geometry} material={nodes.mesh_164.material} />
                            <mesh geometry={nodes.mesh_165.geometry} material={materials['aluminum.001']} />
                            <mesh geometry={nodes.mesh_166.geometry} material={nodes.mesh_166.material} />
                        </group>
                        <mesh geometry={nodes.mesh_143.geometry} material={nodes.mesh_143.material} />
                        <mesh geometry={nodes.mesh_144.geometry} material={nodes.mesh_144.material} />
                        <mesh geometry={nodes.mesh_145.geometry} material={nodes.mesh_145.material} />
                        <mesh geometry={nodes.mesh_146.geometry} material={nodes.mesh_146.material} />
                        <mesh geometry={nodes.mesh_147.geometry} material={nodes.mesh_147.material} />
                        <mesh geometry={nodes.mesh_148.geometry} material={nodes.mesh_148.material} />
                        <mesh geometry={nodes.mesh_149.geometry} material={nodes.mesh_149.material} />
                        <mesh geometry={nodes.mesh_150.geometry} material={nodes.mesh_150.material} />
                    </group>
                    <group position={[-0.52, 1.92, 0.71]}>
                        <group position={[0.08, 0.21, 0.07]}>
                            <mesh geometry={nodes.mesh_176.geometry} material={nodes.mesh_176.material} />
                            <mesh geometry={nodes.mesh_177.geometry} material={nodes.mesh_177.material} />
                            <mesh geometry={nodes.mesh_178.geometry} material={nodes.mesh_178.material} />
                            <mesh geometry={nodes.mesh_179.geometry} material={nodes.mesh_179.material} />
                        </group>
                        <group position={[-0.03, 0.14, 0]}>
                            <mesh geometry={nodes.mesh_180.geometry} material={nodes.mesh_180.material} />
                            <mesh geometry={nodes.mesh_181.geometry} material={nodes.mesh_181.material} />
                            <mesh geometry={nodes.mesh_182.geometry} material={nodes.mesh_182.material} />
                            <mesh geometry={nodes.mesh_183.geometry} material={nodes.mesh_183.material} />
                            <mesh geometry={nodes.mesh_184.geometry} material={nodes.mesh_184.material} />
                            <mesh geometry={nodes.mesh_185.geometry} material={nodes.mesh_185.material} />
                        </group>
                        <group position={[0.02, 0.15, 0.12]}>
                            <mesh geometry={nodes.mesh_186.geometry} material={nodes.mesh_186.material} />
                        </group>
                        <group position={[-0.03, 0.05, 0.05]}>
                            <mesh geometry={nodes.mesh_187.geometry} material={nodes.mesh_187.material} />
                            <mesh geometry={nodes.mesh_188.geometry} material={nodes.mesh_188.material} />
                            <mesh geometry={nodes.mesh_189.geometry} material={nodes.mesh_189.material} />
                            <mesh geometry={nodes.mesh_190.geometry} material={nodes.mesh_190.material} />
                            <mesh geometry={nodes.mesh_191.geometry} material={nodes.mesh_191.material} />
                            <mesh geometry={nodes.mesh_192.geometry} material={nodes.mesh_192.material} />
                            <mesh geometry={nodes.mesh_193.geometry} material={nodes.mesh_193.material} />
                        </group>
                        <mesh geometry={nodes.mesh_167.geometry} material={nodes.mesh_167.material} />
                        <mesh geometry={nodes.mesh_168.geometry} material={nodes.mesh_168.material} />
                        <mesh geometry={nodes.mesh_169.geometry} material={nodes.mesh_169.material} />
                        <mesh geometry={nodes.mesh_170.geometry} material={nodes.mesh_170.material} />
                        <mesh geometry={nodes.mesh_171.geometry} material={nodes.mesh_171.material} />
                        <mesh geometry={nodes.mesh_172.geometry} material={nodes.mesh_172.material} />
                        <mesh geometry={nodes.mesh_173.geometry} material={nodes.mesh_173.material} />
                        <mesh geometry={nodes.mesh_174.geometry} material={nodes.mesh_174.material} />
                        <mesh geometry={nodes.mesh_175.geometry} material={nodes.mesh_175.material} />
                    </group>
                    <group position={[-0.56, 1.21, 0.72]}>
                        <mesh geometry={nodes.mesh_194.geometry} material={nodes.mesh_194.material} />
                        <mesh geometry={nodes.mesh_195.geometry} material={nodes.mesh_195.material} />
                    </group>
                    <group position={[-0.63, 1.24, 0.61]}>
                        <mesh geometry={nodes.mesh_196.geometry} material={nodes.mesh_196.material} />
                        <mesh geometry={nodes.mesh_197.geometry} material={nodes.mesh_197.material} />
                    </group>
                    <group position={[-0.39, 1.33, -0.6]}>
                        <mesh geometry={nodes.mesh_198.geometry} material={nodes.mesh_198.material} />
                        <mesh geometry={nodes.mesh_199.geometry} material={nodes.mesh_199.material} />
                        <mesh geometry={nodes.mesh_200.geometry} material={nodes.mesh_200.material} />
                    </group>
                    <group position={[0.65, 0.78, 0.67]}>
                        <mesh geometry={nodes.mesh_201.geometry} material={nodes.mesh_201.material} />
                        <mesh geometry={nodes.mesh_202.geometry} material={nodes.mesh_202.material} />
                        <mesh geometry={nodes.mesh_203.geometry} material={nodes.mesh_203.material} />
                    </group>
                    <group position={[-0.41, 0.66, -0.23]}>
                        <group position={[-0.01, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
                            <group position={[-0.07, -0.05, 0]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0}>
                                <mesh geometry={nodes.mesh_206.geometry} material={nodes.mesh_206.material} />
                            </group>
                            <mesh geometry={nodes.mesh_205.geometry} material={nodes.mesh_205.material} />
                        </group>
                        <mesh geometry={nodes.mesh_204.geometry} material={nodes.mesh_204.material} />
                    </group>
                    <group position={[0.02, 0.7, -0.26]}>
                        <group position={[0, 0, 0.11]} rotation={[Math.PI / 2, 0, Math.PI]}>
                            <group position={[-0.08, 0.09, 0.01]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.mesh_209.geometry} material={nodes.mesh_209.material} />
                                <mesh geometry={nodes.mesh_210.geometry} material={nodes.mesh_210.material} />
                            </group>
                            <group position={[-0.08, 0.09, 0.01]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.mesh_211.geometry} material={nodes.mesh_211.material} />
                            </group>
                            <mesh geometry={nodes.mesh_208.geometry} material={nodes.mesh_208.material} />
                        </group>
                        <mesh geometry={nodes.mesh_207.geometry} material={nodes.mesh_207.material} />
                    </group>
                    <group position={[-0.19, 0.67, -0.84]}>
                        <mesh geometry={nodes.mesh_212.geometry} material={nodes.mesh_212.material} />
                    </group>
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_213.geometry} material={nodes.mesh_213.material} />
                        <mesh geometry={nodes.mesh_214.geometry} material={nodes.mesh_214.material} />
                        <mesh geometry={nodes.mesh_215.geometry} material={nodes.mesh_215.material} />
                        <mesh geometry={nodes.mesh_216.geometry} material={nodes.mesh_216.material} />
                        <mesh geometry={nodes.mesh_217.geometry} material={materials.mars_2020_06_n} />
                        <mesh geometry={nodes.mesh_218.geometry} material={nodes.mesh_218.material} />
                        <mesh geometry={nodes.mesh_219.geometry} material={nodes.mesh_219.material} />
                        <mesh geometry={nodes.mesh_220.geometry} material={nodes.mesh_220.material} />
                        <mesh geometry={nodes.mesh_221.geometry} material={nodes.mesh_221.material} />
                        <mesh geometry={nodes.mesh_222.geometry} material={nodes.mesh_222.material} />
                        <mesh geometry={nodes.mesh_223.geometry} material={nodes.mesh_223.material} />
                        <mesh geometry={nodes.mesh_224.geometry} material={nodes.mesh_224.material} />
                        <mesh geometry={nodes.mesh_225.geometry} material={nodes.mesh_225.material} />
                        <mesh geometry={nodes.mesh_226.geometry} material={nodes.mesh_226.material} />
                        <mesh geometry={nodes.mesh_227.geometry} material={nodes.mesh_227.material} />
                        <mesh geometry={nodes.mesh_228.geometry} material={nodes.mesh_228.material} />
                        <mesh geometry={nodes.mesh_229.geometry} material={nodes.mesh_229.material} />
                        <mesh geometry={nodes.mesh_230.geometry} material={nodes.mesh_230.material} />
                        <mesh geometry={nodes.mesh_231.geometry} material={materials.covidPlaque} />
                    </group>
                    <group position={[-0.49, 0.88, 1.23]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[0, 0, 0]}>
                        <mesh geometry={nodes.mesh_232.geometry} material={materials.sample_handling_door} />
                        <mesh geometry={nodes.mesh_233.geometry} material={nodes.mesh_233.material} />
                    </group>
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_234.geometry} material={nodes.mesh_234.material} />
                        <mesh geometry={nodes.mesh_235.geometry} material={nodes.mesh_235.material} />
                        <mesh geometry={nodes.mesh_236.geometry} material={nodes.mesh_236.material} />
                    </group>
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_237.geometry} material={nodes.mesh_237.material} />
                    </group>
                    <group position={[-0.02, 1.16, 0.08]}>
                        <mesh geometry={nodes.mesh_238.geometry} material={nodes.mesh_238.material} />
                        <mesh geometry={nodes.mesh_239.geometry} material={nodes.mesh_239.material} />
                        <mesh geometry={nodes.mesh_240.geometry} material={nodes.mesh_240.material} />
                        <mesh geometry={nodes.mesh_241.geometry} material={nodes.mesh_241.material} />
                        <mesh geometry={nodes.mesh_242.geometry} material={nodes.mesh_242.material} />
                    </group>
                    <group position={[0.54, 1.15, 0.87]} rotation={[-Math.PI, 0, 0]} scale={0.03}>
                        <mesh geometry={nodes.mesh_243.geometry} material={nodes.mesh_243.material} />
                        <mesh geometry={nodes.mesh_244.geometry} material={nodes.mesh_244.material} />
                        <mesh geometry={nodes.mesh_245.geometry} material={nodes.mesh_245.material} />
                        <mesh geometry={nodes.mesh_246.geometry} material={nodes.mesh_246.material} />
                        <mesh geometry={nodes.mesh_247.geometry} material={nodes.mesh_247.material} />
                        <mesh geometry={nodes.mesh_248.geometry} material={nodes.mesh_248.material} />
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

    if (snap.current === "aluminum_black")
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.perseveranceWheel}</h1>
                <p className="text-xl text-justify">{t.perseveranceWheelDetails}</p>
            </div>
        );
    else if (snap.current === "mars_2020_04")
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.perseverancePowerSource}</h1>
                <p className="text-xl text-justify">{t.perseverancePowerSourceDetails}</p>
            </div>
        );
    else if (snap.current === "mars_2020_02")
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.perseveranceNavigationCameras}</h1>
                <p className="text-xl text-justify">{t.perseveranceNavigationCamerasDetails}</p>
            </div>
        );
    else if (snap.current === "mars_2020_07")
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.perseveranceTurret}</h1>
                <p className="text-xl text-justify">{t.perseveranceTurretDetails}</p>
            </div>
        );
    else if (snap.current === "black_krinkle")
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.perseveranceUHFAntenna}</h1>
                <p className="text-xl text-justify">{t.perseveranceUHFAntennaDetails}</p>
            </div>
        );
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">{t.perseveranceKnowMore}</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">{t.modelView}<span className="md:hidden"> {t.modelViewResponsive}</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="https://storage.echoar.xyz/wispy-violet-4999/6bca4f75-c15c-4754-8227-e9d027561e4f" width="250" height="250" alt="Space QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/G6xs" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">{t.modelViewInAR}</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Perseverance() {

    const router = useRouter();
    const { locale } = router;
    const t = locale ? locales[locale] : locales['en'];

    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/space" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl lowercase" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    {t.goBack}
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    {t.perseverance}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.perseveranceDesc}</div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.7} />
                            {/* <Environment preset="city" /> */}
                        </Suspense>
                        {/* <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
                        <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                </div>

                <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </div>
    )
}
