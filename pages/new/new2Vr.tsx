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
import { fade } from "../../animations"
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import de from '../../locales/de/translationDe.json'
import en from '../../locales/en/translationEn.json';
import fr from '../../locales/fr/translationFr.json';
import hi from '../../locales/hi/translationHi.json';
import ja from '../../locales/ja/translationJa.json';
import ru from '../../locales/ru/translationRu.json';
import { useRouter } from 'next/router';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

const locales = { en, de, fr, hi, ja, ru };

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
    Object_8: THREE.Mesh
    Object_11: THREE.Mesh
    Object_14: THREE.Mesh
    Object_17: THREE.Mesh
    Object_22: THREE.Mesh
    Object_20: THREE.Mesh
    Object_25: THREE.Mesh
    Object_28: THREE.Mesh
    Object_31: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_48: THREE.Mesh
    Object_50: THREE.Mesh
    Object_52: THREE.Mesh
    Object_54: THREE.Mesh
    Object_56: THREE.Mesh
  }
  materials: {
    mercury: THREE.MeshStandardMaterial
    venus: THREE.MeshStandardMaterial
    earth: THREE.MeshStandardMaterial
    mars: THREE.MeshStandardMaterial
    jupiter: THREE.MeshStandardMaterial
    saturn_ring: THREE.MeshStandardMaterial
    saturn: THREE.MeshStandardMaterial
    uranus: THREE.MeshStandardMaterial
    neptune: THREE.MeshStandardMaterial
    pluto: THREE.MeshStandardMaterial
    moon: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Animation'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const state = proxy({
  current: null,
})

type ModelProps = JSX.IntrinsicElements['group'];

function Model({ isAnimationPlaying, toggleAnimation, ...props }: ModelProps) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/space/SolarSystem/solar_system_animation.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  const [hovered, set] = useState(null)

  useEffect(() => {
    if (isAnimationPlaying) {
      actions['Animation'].play();
      actions['Animation'].paused = false;
    } else {
      actions['Animation'].paused = true;
      // actions['Animation'].stop();
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
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="mercury_BezierCircle_4" scale={9.695}>
                <group name="mercury_2" position={[0, 0, 1]} rotation={[1.739, -0.875, 1.237]} scale={0.038}>
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.mercury} />
                </group>
              </group>
              <group name="venus_BezierCircle_7" rotation={[0, 0.028, 0]} scale={12.235}>
                <group name="venus_5" position={[0, 0, 1]} rotation={[0, 0, Math.PI / 2]} scale={0.102}>
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.venus} />
                </group>
              </group>
              <group name="erath_BezierCircle_11" scale={16.115}>
                <group name="erath_8" position={[0, 0, 1]} rotation={[0.819, 0, 0]} scale={0.062}>
                  <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.earth} />
                </group>
              </group>
              <group name="mars_BezierCircle_14" scale={20.451}>
                <group name="mars_12" position={[0, 0, 1]} rotation={[0, 0, Math.PI / 2]} scale={0.025}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.mars} />
                </group>
              </group>
              <group name="jupiter_BezierCircle_17" scale={28.775}>
                <group name="jupiter_15" position={[0, 0, 1]} scale={0.095}>
                  <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.jupiter} />
                </group>
              </group>
              <group name="saturn_BezierCircle_21" scale={36.61}>
                <group name="saturn_19" position={[0, 0, 1]} scale={0.059}>
                  <group name="saturn_ring_18" position={[0.01, -0.067, 0]} rotation={[0, 0, 0.351]} scale={1.739}>
                    <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.saturn_ring} />
                  </group>
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.saturn} />
                </group>
              </group>
              <group name="uranus_BezierCircle_24" scale={44.26}>
                <group name="uranus_22" position={[0, 0, 1]} rotation={[0, 0, Math.PI / 2]} scale={0.02}>
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.uranus} />
                </group>
              </group>
              <group name="neptune_BezierCircle_27" scale={49.927}>
                <group name="neptune_25" position={[0, 0, 1]} rotation={[0, 0, Math.PI / 2]} scale={0.024}>
                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.neptune} />
                </group>
              </group>
              <group name="pluto_BezierCircle_30" scale={54.22}>
                <group name="pluto_28" position={[0, 0, 1]} rotation={[0, 0, Math.PI / 2]} scale={0.004}>
                  <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.pluto} />
                </group>
              </group>
              <group name="moon_BezierCircle_33" position={[0, 6.426, 14.778]} scale={-1.879}>
                <group name="moon_31" position={[0, 0, 1]} rotation={[-0.023, 0, Math.PI / 2]} scale={0.096}>
                  <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.moon} />
                </group>
              </group>
              <group name="mercury_BezierCircle001_34" scale={9.695}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Material} />
              </group>
              <group name="venus_BezierCircle001_35" rotation={[0, 0.028, 0]} scale={12.235}>
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Material} />
              </group>
              <group name="erath_BezierCircle001_36" scale={16.115}>
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Material} />
              </group>
              <group name="mars_BezierCircle001_37" scale={20.451}>
                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Material} />
              </group>
              <group name="jupiter_BezierCircle001_38" scale={28.775}>
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.Material} />
              </group>
              <group name="saturn_BezierCircle001_39" scale={36.61}>
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.Material} />
              </group>
              <group name="uranus_BezierCircle001_40" scale={44.26}>
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.Material} />
              </group>
              <group name="neptune_BezierCircle001_41" scale={49.927}>
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.Material} />
              </group>
              <group name="pluto_BezierCircle001_42" scale={54.22}>
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.Material} />
              </group>
              <group name="moon_BezierCircle001_43" position={[0, 6.426, 14.778]} scale={-1.879}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.Material} />
              </group>
              <group name="sun_53" scale={5.997}>
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.material} />
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

  if (snap.current === "material") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemSun}</h1>
        <p className="text-xl text-justify">{t.solarSystemSunDescription}</p>
      </div>
    )
  }
  else if (snap.current === "mercury") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemMercury}</h1>
        <p className="text-xl text-justify">{t.solarSystemMercuryDescription}</p>
      </div>
    )
  }
  else if (snap.current === "venus") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemVenus}</h1>
        <p className="text-xl text-justify">{t.solarSystemVenusDescription}</p>
      </div>
    )
  }
  else if (snap.current === "earth" || snap.current === "moon") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemEarth}</h1>
        <p className="text-xl text-justify">{t.solarSystemEarthDescription}</p>
      </div>
    )
  }
  else if (snap.current === "mars") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemMars}</h1>
        <p className="text-xl text-justify">{t.solarSystemMarsDescription}</p>
      </div>
    )
  }
  else if (snap.current === "jupiter") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemJupiter}</h1>
        <p className="text-xl text-justify">{t.solarSystemJupiterDescription}</p>
      </div>
    )
  }
  else if (snap.current === "saturn" || snap.current === "saturn_ring") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemSaturn}</h1>
        <p className="text-xl text-justify">{t.solarSystemSaturnDescription}</p>
      </div>
    )
  }
  else if (snap.current === "uranus") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemUranus}</h1>
        <p className="text-xl text-justify">{t.solarSystemUranusDescription}</p>
      </div>
    )
  }
  else if (snap.current === "neptune") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">{t.solarSystemNeptune}</h1>
        <p className="text-xl text-justify">{t.solarSystemNeptuneDescription}</p>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        {/* <h1 className="text-2xl tracking-wider">{t.solarSystemKnowMore}</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">{t.modelView}<span className="md:hidden"> {t.modelViewResponsive}</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="https://storage.echoar.xyz/wispy-violet-4999/25c8b0c7-d505-419a-9d20-5a443d0e67a0" width="250" height="250" alt="Space QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/t2YC" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">{t.modelViewInAR}</button>
                    </a>
                </div> */}
      </div>
    )
  }
}

export default function SolarSystem() {

  const router = useRouter();
  const { locale } = router;
  const t = locale ? locales[locale] : locales['en'];
  const [isAnimationPlaying, setAnimationPlaying] = useState(false);

  const toggleAnimation = () => {
    setAnimationPlaying((prevState) => !prevState);
  };

  return (
    <div className="pt-20 md:pt-24 text-white">

      <Link href="/subject/space" passHref>
        <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl lowercase" type="button" aria-hidden="false" aria-label="button">
          <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
          {t.goBack}
        </button>
      </Link>

      <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-3xl font-semibold tracking-wide lg:text-6xl">
          {t.solarSystem}
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
        <Details />
      </motion.div>

      <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

        <div>
          <VRButton />
        </div>

        <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block relative">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
            <XR>
              <ambientLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model isAnimationPlaying={isAnimationPlaying} toggleAnimation={toggleAnimation} scale={0.065} />
                {/* <Environment preset="city" /> */}
              </Suspense>
              {/* <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
              <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
            </XR>
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
