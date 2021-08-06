import React from 'react'
import Earth from "../../components/Models/Earth"
import SolarSystem from "../../components/Models/SolarSystem"
import Water from "../../components/Models/Water"
import ChemGlass from "../../components/Models/ChemGlass"
import DiscoverySpaceShuttle from "../../components/Models/DiscoverySpaceShutle"
import SpaceStation from "../../components/Models/SpaceStation"
export default function ClassRoom1() {
    return (
        <div className="z-10 pt-20 bg-homeImg">
            <Earth />
            <SolarSystem />
            <Water />
            <ChemGlass />
            <DiscoverySpaceShuttle />
            <SpaceStation />
        </div>
    )
}
