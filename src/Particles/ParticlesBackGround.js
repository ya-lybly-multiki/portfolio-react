import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../config/ParticleСonfig";


export default function ParticlesBackGround() {
    return (

        <Particles width={"100%"} height={"100vh"} params={ParticleConfig}/>
    )
}
