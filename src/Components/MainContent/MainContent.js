import React from "react";
import s from "./MainContent.module.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Particles from "react-particles-js";

import { Fade } from "react-awesome-reveal"
import Tilt from "react-tilt/dist/tilt";

const particlesParams = {
    particles: {
        color: {
            value: 'grey',
        },
        links: {
            color: '#f1e8e8',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 500,
            },
            value: 150,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: 'circle',
        },
    },
}


export function MainContent() {
    return (
        <div id={"Main"} className={s.main}>
            <Particles options={particlesParams} className={s.particles}/>

            <div className={s.mainText}>
                <span>Hi there</span>
                <h1>I`M Artyom Trifonov.</h1>
                <h3>I`m Fronted developer</h3>
                <div className={s.mainLinks}>
                    <a target={"_blank"} href={"https://github.com/ya-lybly-multiki"}>
                    <GitHubIcon target={"_blank"} fontSize={"large"} />
                    </a>
                    <a target={"_blank"} href={"https://t.me/Artem_Trifion"}>
                        <TelegramIcon target={"_blank"} fontSize={"large"} />
                    </a>
                    <a target={"_blank"} href={"https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%91%D0%BC-%D1%82%D1%80%D0%B8%D1%84%D0%BE%D0%BD%D0%BE%D0%B2-9b6734225/"}>
                        <LinkedInIcon target={"_blank"} fontSize={"large"} />
                    </a>
                </div>
            </div>
            <Fade direction={'right'} triggerOnce><Tilt transitionSpeed={1600}>
                <div className={s.mainPhotoWrapper}>
                    <img className={s.mainPhoto}/>
                </div>
            </Tilt></Fade>
        </div>
    )
}