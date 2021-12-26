import React from "react";
import s from "./Project.module.scss"


export function Project(props) {

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={`${s.face} ${s.face1}`}>
                    <div className={s.content}>
                        <img src={props.icon} alt={props.title}/>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className={`${s.face} ${s.face2}`}>
                    <div className={s.content}>
                        <p>{props.description}</p>
                        <div className={s.test}>
                            <a href={props.linksGit} target={'blank'}>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}