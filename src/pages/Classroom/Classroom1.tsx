import React from 'react'
import Earth from "../../components/3DModels/Earth"
import SolarSystem from "../../components/3DModels/SolarSystem"
import Water from "../../components/3DModels/Water"
import ChemGlass from "../../components/3DModels/ChemGlass"
import DiscoverySpaceShuttle from "../../components/3DModels/DiscoverySpaceShutle"
import Perseverance from "../../components/3DModels/Perseverance"
import SpaceStation from "../../components/3DModels/SpaceStation"

export default function ClassRoom1() {
    return (
        <div className="z-10 pt-20 bg-ARbg">
            <Earth />
            <SolarSystem />
            <Water />
            <ChemGlass />
            <DiscoverySpaceShuttle />
            <Perseverance />
            <SpaceStation />
        </div>
    )
}
