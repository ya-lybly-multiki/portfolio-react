import React from "react";

import s from "./Project.module.scss"

export function Project(props) {
    return (
        <div className={s.ProjectWrapper}>
            <div className={s.ProjectImg} style={props.icon}>
                <a className={s.ProjectLink} href={props.linksGit} target={"_blank"}>View code</a>
            </div>
            <div className={s.DescriptionWrapper}>
                <h3>{props.title}</h3>
                <ul>
                    {props.description.Techs.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
            </div>
        </div>
    )
}