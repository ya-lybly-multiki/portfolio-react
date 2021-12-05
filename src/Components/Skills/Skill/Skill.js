import React from "react";
import s from "./Skill.module.scss"


export function Skill(props) {
    return (
        <>
            <div className={s.skillContainer}>
                <div className={s.skillTitleSection}>
                    <div className={s.skillLogoContainer}>
                        <img className={s.skillLogo} src={props.icon} alt={'skill logo'}/>
                    </div>
                    <h3>{props.title}</h3>
                </div>
                <span>
                {props.description}
            </span>
            </div>
        </>
    )
}