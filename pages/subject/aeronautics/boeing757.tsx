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
        lights__0: THREE.Mesh
        light_rim__0: THREE.Mesh
        cock_pit__0: THREE.Mesh
        Group_607_dbl_Group_008_0: THREE.Mesh
        Group_607_dbl_FirstClassSeat03_001_0: THREE.Mesh
        interior_top_dbl_FirstClassSeat03_001_0: THREE.Mesh
        ['interior_top_dbl_Group#71_002_0']: THREE.Mesh
        ['interior_top_dbl_Group#71_001_0']: THREE.Mesh
        Group_565__0: THREE.Mesh
        interior_air_vents_dbl_FirstClassSeat03_001_0: THREE.Mesh
        ['interior_air_vents_dbl_Group#71_002_0']: THREE.Mesh
        ['interior_air_vents_dbl_Group#71_002_0_1']: THREE.Mesh
        ['interior_air_vents_dbl_Group#71_002_0_2']: THREE.Mesh
        ['interior_air_vents_dbl_Group#71_002_0_3']: THREE.Mesh
        ['interior_air_vents_dbl_Group#71_001_0']: THREE.Mesh
        lugage_opener__0: THREE.Mesh
        Seats_dbl_FirstClassSeat03_001_0: THREE.Mesh
        Seats_dbl_FirstClassSeat03_001_0_1: THREE.Mesh
        Seats_dbl_FirstClassSeat03_001_0_2: THREE.Mesh
        Seats_dbl_FirstClassSeat03_001_0_3: THREE.Mesh
        Seats_dbl_FirstClassSeat03_002_0: THREE.Mesh
        Seats_dbl_FirstClassSeat03_001_0_4: THREE.Mesh
        Seats_dbl_Group_003_0: THREE.Mesh
        Seats_dbl_Group_002_0: THREE.Mesh
        Seats_dbl_Group_005_0: THREE.Mesh
        Seats_dbl_Group_005_0_1: THREE.Mesh
        Seats_dbl_Group_004_0: THREE.Mesh
        ['hull_turbine_004_turbine-01_metal_bright_0']: THREE.Mesh
        ['hull_turbine_004_turbine-01_metal_mid_0']: THREE.Mesh
        ['hull_turbine_004_turbine-01_metal_dark_0']: THREE.Mesh
        ['hull_turbine_004_turbine-01_plastic_cone_black_0']: THREE.Mesh
        ['hull_turbine_004_turbine-01_plastic_grey_0']: THREE.Mesh
        ['hull_turbine_004_turbine-01_accent_yellow_0']: THREE.Mesh
        ['grid_turbine_007_turbine-01_metal_mid_0']: THREE.Mesh
        ['grid_turbine_007_turbine-01_metal_dark_0']: THREE.Mesh
        ['grid_turbine_007_turbine-01_accent_yellow_0']: THREE.Mesh
        ['pipes_turbine_009_turbine-01_metal_bright_0']: THREE.Mesh
        ['pipes_turbine_009_turbine-01_metal_mid_0']: THREE.Mesh
        ['pipes_turbine_009_turbine-01_metal_dark_0']: THREE.Mesh
        ['mount_turbine_014_turbine-01_metal_bright_0']: THREE.Mesh
        ['mount_turbine_014_turbine-01_metal_mid_0']: THREE.Mesh
        ['mount_turbine_014_turbine-01_metal_dark_0']: THREE.Mesh
        ['plates_turbine_016_turbine-01_metal_bright_0']: THREE.Mesh
        ['plates_turbine_016_turbine-01_metal_mid_0']: THREE.Mesh
        ['plates_turbine_016_turbine-01_metal_dark_0']: THREE.Mesh
        ['plates_turbine_016_turbine-01_accent_yellow_0']: THREE.Mesh
        ['blades_turbine_003_turbine-01_metal_bright_0']: THREE.Mesh
        ['blades_turbine_003_turbine-01_metal_mid_0']: THREE.Mesh
        ['blades_turbine_003_turbine-01_accent_yellow_0']: THREE.Mesh
        ['canister_turbine_011_turbine-01_metal_bright_0']: THREE.Mesh
        ['canister_turbine_011_turbine-01_metal_mid_0']: THREE.Mesh
        ['canister_turbine_011_turbine-01_accent_yellow_0']: THREE.Mesh
        ['screws_turbine_001_turbine-01_metal_mid_0']: THREE.Mesh
        ['screws_turbine_001_turbine-01_metal_mid_0_1']: THREE.Mesh
        ['blades_turbine_004_turbine-01_metal_bright_0']: THREE.Mesh
        ['blades_turbine_004_turbine-01_metal_mid_0']: THREE.Mesh
        ['blades_turbine_004_turbine-01_accent_yellow_0']: THREE.Mesh
        ['canister_turbine_012_turbine-01_metal_bright_0']: THREE.Mesh
        ['canister_turbine_012_turbine-01_metal_mid_0']: THREE.Mesh
        ['canister_turbine_012_turbine-01_accent_yellow_0']: THREE.Mesh
        ['grid_turbine_008_turbine-01_metal_mid_0']: THREE.Mesh
        ['grid_turbine_008_turbine-01_metal_dark_0']: THREE.Mesh
        ['grid_turbine_008_turbine-01_accent_yellow_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_metal_bright_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_metal_mid_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_metal_dark_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_plastic_cone_black_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_plastic_grey_0']: THREE.Mesh
        ['hull_turbine_005_turbine-01_accent_yellow_0']: THREE.Mesh
        ['mount_turbine_015_turbine-01_metal_bright_0']: THREE.Mesh
        ['mount_turbine_015_turbine-01_metal_mid_0']: THREE.Mesh
        ['mount_turbine_015_turbine-01_metal_dark_0']: THREE.Mesh
        ['pipes_turbine_010_turbine-01_metal_bright_0']: THREE.Mesh
        ['pipes_turbine_010_turbine-01_metal_mid_0']: THREE.Mesh
        ['pipes_turbine_010_turbine-01_metal_dark_0']: THREE.Mesh
        ['plates_turbine_017_turbine-01_metal_bright_0']: THREE.Mesh
        ['plates_turbine_017_turbine-01_metal_mid_0']: THREE.Mesh
        ['plates_turbine_017_turbine-01_metal_dark_0']: THREE.Mesh
        ['plates_turbine_017_turbine-01_accent_yellow_0']: THREE.Mesh
        ['screws_turbine_002_turbine-01_metal_mid_0']: THREE.Mesh
        ['screws_turbine_002_turbine-01_metal_mid_0_1']: THREE.Mesh
        body001_MAIN_0: THREE.Mesh
        body001_MAIN_0_1: THREE.Mesh
        Object004_tubines_0: THREE.Mesh
        Object005_tubines_0: THREE.Mesh
        Wheels001_landing_gear_0: THREE.Mesh
        windshild001_windshield_0: THREE.Mesh
    }
    materials: {
        lights__0: THREE.MeshStandardMaterial
        dbl_Group_009: THREE.MeshStandardMaterial
        dbl_FirstClassSeat03_001: THREE.MeshStandardMaterial
        dbl_Group71_002: THREE.MeshStandardMaterial
        dbl_Group71_001: THREE.MeshStandardMaterial
        dbl_Group_003: THREE.MeshStandardMaterial
        dbl_Group_005: THREE.MeshStandardMaterial
        dbl_Group_004: THREE.MeshStandardMaterial
        ['turbine-01_metal_bright']: THREE.MeshStandardMaterial
        ['turbine-01_metal_mid']: THREE.MeshStandardMaterial
        ['turbine-01_metal_dark']: THREE.MeshStandardMaterial
        ['turbine-01_plastic_cone_black']: THREE.MeshStandardMaterial
        ['turbine-01_plastic_grey']: THREE.MeshStandardMaterial
        ['turbine-01_accent_yellow']: THREE.MeshStandardMaterial
        MAIN: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/aeronautics/airliner_boeing_757_transparent/scene.gltf') as unknown as GLTFResult
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
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[166.64, 191.7, -457.7]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.lights__0.geometry} material={nodes.lights__0.material} />
                    </group>
                    <group position={[166.64, 191.7, -457.62]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.light_rim__0.geometry} material={nodes.light_rim__0.material} />
                    </group>
                    <group position={[166.64, 261.29, -1468.3]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.cock_pit__0.geometry} material={nodes.cock_pit__0.material} />
                    </group>
                    <group position={[166.69, 268.73, -270.74]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Group_607_dbl_Group_008_0.geometry} material={materials.dbl_Group_009} />
                        <mesh
                            geometry={nodes.Group_607_dbl_FirstClassSeat03_001_0.geometry}
                            material={nodes.Group_607_dbl_FirstClassSeat03_001_0.material}
                        />
                    </group>
                    <group position={[239.86, 329.35, -133.76]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes.interior_top_dbl_FirstClassSeat03_001_0.geometry}
                            material={nodes.interior_top_dbl_FirstClassSeat03_001_0.material}
                        />
                        <mesh
                            geometry={nodes['interior_top_dbl_Group#71_002_0'].geometry}
                            material={nodes['interior_top_dbl_Group#71_002_0'].material}
                        />
                        <mesh
                            geometry={nodes['interior_top_dbl_Group#71_001_0'].geometry}
                            material={nodes['interior_top_dbl_Group#71_001_0'].material}
                        />
                    </group>
                    <group position={[109.14, 327.1, -134.7]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Group_565__0.geometry} material={nodes.Group_565__0.material} />
                    </group>
                    <group position={[85.84, 317.44, 265.89]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes.interior_air_vents_dbl_FirstClassSeat03_001_0.geometry}
                            material={nodes.interior_air_vents_dbl_FirstClassSeat03_001_0.material}
                        />
                        <mesh
                            geometry={nodes['interior_air_vents_dbl_Group#71_002_0'].geometry}
                            material={nodes['interior_air_vents_dbl_Group#71_002_0'].material}
                        />
                        <mesh
                            geometry={nodes['interior_air_vents_dbl_Group#71_002_0_1'].geometry}
                            material={nodes['interior_air_vents_dbl_Group#71_002_0_1'].material}
                        />
                        <mesh
                            geometry={nodes['interior_air_vents_dbl_Group#71_002_0_2'].geometry}
                            material={nodes['interior_air_vents_dbl_Group#71_002_0_2'].material}
                        />
                        <mesh
                            geometry={nodes['interior_air_vents_dbl_Group#71_002_0_3'].geometry}
                            material={nodes['interior_air_vents_dbl_Group#71_002_0_3'].material}
                        />
                        <mesh
                            geometry={nodes['interior_air_vents_dbl_Group#71_001_0'].geometry}
                            material={nodes['interior_air_vents_dbl_Group#71_001_0'].material}
                        />
                    </group>
                    <group position={[223.22, 328.51, 256.56]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.lugage_opener__0.geometry} material={nodes.lugage_opener__0.material} />
                    </group>
                    <group position={[84.35, 240.37, -1088.64]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_001_0.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_001_0.material}
                        />
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_001_0_1.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_001_0_1.material}
                        />
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_001_0_2.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_001_0_2.material}
                        />
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_001_0_3.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_001_0_3.material}
                        />
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_002_0.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_002_0.material}
                        />
                        <mesh
                            geometry={nodes.Seats_dbl_FirstClassSeat03_001_0_4.geometry}
                            material={nodes.Seats_dbl_FirstClassSeat03_001_0_4.material}
                        />
                        <mesh geometry={nodes.Seats_dbl_Group_003_0.geometry} material={materials.dbl_Group_003} />
                        <mesh geometry={nodes.Seats_dbl_Group_002_0.geometry} material={nodes.Seats_dbl_Group_002_0.material} />
                        <mesh geometry={nodes.Seats_dbl_Group_005_0.geometry} material={nodes.Seats_dbl_Group_005_0.material} />
                        <mesh geometry={nodes.Seats_dbl_Group_005_0_1.geometry} material={nodes.Seats_dbl_Group_005_0_1.material} />
                        <mesh geometry={nodes.Seats_dbl_Group_004_0.geometry} material={materials.dbl_Group_004} />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_metal_bright_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_metal_mid_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_metal_dark_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_plastic_cone_black_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_plastic_cone_black_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_plastic_grey_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_plastic_grey_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_004_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['hull_turbine_004_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['grid_turbine_007_turbine-01_metal_mid_0'].geometry}
                            material={nodes['grid_turbine_007_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['grid_turbine_007_turbine-01_metal_dark_0'].geometry}
                            material={nodes['grid_turbine_007_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['grid_turbine_007_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['grid_turbine_007_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['pipes_turbine_009_turbine-01_metal_bright_0'].geometry}
                            material={nodes['pipes_turbine_009_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['pipes_turbine_009_turbine-01_metal_mid_0'].geometry}
                            material={nodes['pipes_turbine_009_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['pipes_turbine_009_turbine-01_metal_dark_0'].geometry}
                            material={nodes['pipes_turbine_009_turbine-01_metal_dark_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['mount_turbine_014_turbine-01_metal_bright_0'].geometry}
                            material={nodes['mount_turbine_014_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['mount_turbine_014_turbine-01_metal_mid_0'].geometry}
                            material={nodes['mount_turbine_014_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['mount_turbine_014_turbine-01_metal_dark_0'].geometry}
                            material={nodes['mount_turbine_014_turbine-01_metal_dark_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['plates_turbine_016_turbine-01_metal_bright_0'].geometry}
                            material={nodes['plates_turbine_016_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_016_turbine-01_metal_mid_0'].geometry}
                            material={nodes['plates_turbine_016_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_016_turbine-01_metal_dark_0'].geometry}
                            material={nodes['plates_turbine_016_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_016_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['plates_turbine_016_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['blades_turbine_003_turbine-01_metal_bright_0'].geometry}
                            material={nodes['blades_turbine_003_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['blades_turbine_003_turbine-01_metal_mid_0'].geometry}
                            material={nodes['blades_turbine_003_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['blades_turbine_003_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['blades_turbine_003_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['canister_turbine_011_turbine-01_metal_bright_0'].geometry}
                            material={nodes['canister_turbine_011_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['canister_turbine_011_turbine-01_metal_mid_0'].geometry}
                            material={nodes['canister_turbine_011_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['canister_turbine_011_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['canister_turbine_011_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[545.8, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['screws_turbine_001_turbine-01_metal_mid_0'].geometry}
                            material={nodes['screws_turbine_001_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['screws_turbine_001_turbine-01_metal_mid_0_1'].geometry}
                            material={nodes['screws_turbine_001_turbine-01_metal_mid_0_1'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['blades_turbine_004_turbine-01_metal_bright_0'].geometry}
                            material={nodes['blades_turbine_004_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['blades_turbine_004_turbine-01_metal_mid_0'].geometry}
                            material={nodes['blades_turbine_004_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['blades_turbine_004_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['blades_turbine_004_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['canister_turbine_012_turbine-01_metal_bright_0'].geometry}
                            material={nodes['canister_turbine_012_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['canister_turbine_012_turbine-01_metal_mid_0'].geometry}
                            material={nodes['canister_turbine_012_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['canister_turbine_012_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['canister_turbine_012_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['grid_turbine_008_turbine-01_metal_mid_0'].geometry}
                            material={nodes['grid_turbine_008_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['grid_turbine_008_turbine-01_metal_dark_0'].geometry}
                            material={nodes['grid_turbine_008_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['grid_turbine_008_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['grid_turbine_008_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_metal_bright_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_metal_mid_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_metal_dark_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_plastic_cone_black_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_plastic_cone_black_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_plastic_grey_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_plastic_grey_0'].material}
                        />
                        <mesh
                            geometry={nodes['hull_turbine_005_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['hull_turbine_005_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['mount_turbine_015_turbine-01_metal_bright_0'].geometry}
                            material={nodes['mount_turbine_015_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['mount_turbine_015_turbine-01_metal_mid_0'].geometry}
                            material={nodes['mount_turbine_015_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['mount_turbine_015_turbine-01_metal_dark_0'].geometry}
                            material={nodes['mount_turbine_015_turbine-01_metal_dark_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['pipes_turbine_010_turbine-01_metal_bright_0'].geometry}
                            material={nodes['pipes_turbine_010_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['pipes_turbine_010_turbine-01_metal_mid_0'].geometry}
                            material={nodes['pipes_turbine_010_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['pipes_turbine_010_turbine-01_metal_dark_0'].geometry}
                            material={nodes['pipes_turbine_010_turbine-01_metal_dark_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['plates_turbine_017_turbine-01_metal_bright_0'].geometry}
                            material={nodes['plates_turbine_017_turbine-01_metal_bright_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_017_turbine-01_metal_mid_0'].geometry}
                            material={nodes['plates_turbine_017_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_017_turbine-01_metal_dark_0'].geometry}
                            material={nodes['plates_turbine_017_turbine-01_metal_dark_0'].material}
                        />
                        <mesh
                            geometry={nodes['plates_turbine_017_turbine-01_accent_yellow_0'].geometry}
                            material={nodes['plates_turbine_017_turbine-01_accent_yellow_0'].material}
                        />
                    </group>
                    <group position={[-218.12, 124.29, -292.23]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes['screws_turbine_002_turbine-01_metal_mid_0'].geometry}
                            material={nodes['screws_turbine_002_turbine-01_metal_mid_0'].material}
                        />
                        <mesh
                            geometry={nodes['screws_turbine_002_turbine-01_metal_mid_0_1'].geometry}
                            material={nodes['screws_turbine_002_turbine-01_metal_mid_0_1'].material}
                        />
                    </group>
                    <group position={[166.58, 404.54, -92.84]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.body001_MAIN_0.geometry} material={nodes.body001_MAIN_0.material} />
                        <mesh geometry={nodes.body001_MAIN_0_1.geometry} material={nodes.body001_MAIN_0_1.material} />
                    </group>
                    <group position={[166.58, 405.78, -92.84]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object004_tubines_0.geometry} material={nodes.Object004_tubines_0.material} />
                    </group>
                    <group position={[161.1, 405.78, -92.84]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object005_tubines_0.geometry} material={nodes.Object005_tubines_0.material} />
                    </group>
                    <group position={[166.83, 106.26, -662.89]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes.Wheels001_landing_gear_0.geometry}
                            material={nodes.Wheels001_landing_gear_0.material}
                        />
                    </group>
                    <group position={[166.52, 269.28, -1480.55]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            geometry={nodes.windshild001_windshield_0.geometry}
                            material={nodes.windshild001_windshield_0.material}
                        />
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

    if (snap.current === "MAIN") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.Boeing757Wings}</h1>
                <h1 className="text-xl">{t.Boeing757WingsDetails}</h1>
            </div>
        )
    }
    else if (snap.current === "turbine-01_metal_mid") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">{t.Boeing757TurbineEngine}</h1>
                <h1 className="text-xl">{t.Boeing757TurbineEngineDetails}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">{t.Boeing757KnowMore}</h1>
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

export default function Boeing757() {

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
                    {t.Boeing757}
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{t.Boeing757Desc}</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.0015} />
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
