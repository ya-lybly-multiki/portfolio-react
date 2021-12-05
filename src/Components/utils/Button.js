import React from "react";
import s from "./Button.module.scss"

export function Button(props) {
    return (
        <button className={s.button}>{props.title}</button>
    )
}