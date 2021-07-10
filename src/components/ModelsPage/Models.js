import React from 'react'
import "./Models.scss"
import EarthQR from "../../assets/Earth-QR"
import SolarSystemQR from "../../assets/SolarSystemQR"
import H2OrQR from "../../assets/H2OQR"
import BloediteQR from "../../assets/BloediteQR"

export default function Models() {
    return (
        <div className="model__body">

            <div className="models">
                {/* Model 1 */}

                <div className="model">
                    <iframe src="https://go.echoar.xyz/HyD5" title="Earth" className="iframe" />
                </div>

                <div className="model__info">
                    <div className="model__title">Earth</div>
                    <div className="model__details">
                        Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.
                    </div>
                    <div className="view">
                        <img className="QRCode" src={EarthQR} alt="Earth QR" />
                        <a href="https://go.echoar.xyz/HyD5" target="_blank" rel="noopener noreferrer">
                            <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>View in AR
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
