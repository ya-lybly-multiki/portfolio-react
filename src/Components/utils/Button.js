import React from "react";
import s from "./Button.module.scss"

export function Button({title, classN,...props}) {


    return (
        <button {...props} className={ s.button}>{title}</button>
    )
}