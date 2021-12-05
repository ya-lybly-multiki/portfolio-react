import React from "react";
import s from "./Title.module.scss"

export function Title(props) {
    return (
        <>
          <div className={s.title}>{props.title}</div>
            <div style={{width: props.width}} className={s.UnderTitle}/>
        </>
    )

}