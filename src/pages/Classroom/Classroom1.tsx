import React from 'react'
import Earth from "../../components/Models/Earth.js"
import SolarSystem from "../../components/Models/SolarSystem.js"
import Water from "../../components/Models/Water.js"
import ChemGlass from "../../components/Models/ChemGlass.js"

export default function ClassModel() {
    return (
        <div className="pt-20 z-10 bg-homeImg">
            <Earth />
            <SolarSystem />
            <Water />
            <ChemGlass />
        </div>
    )
}
