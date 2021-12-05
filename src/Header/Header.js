import React from "react";
import s from "./Header.module.scss"
import {Navbar} from "./Navigation/Navibar";



export function Header () {
    return (
        <div className={s.header}>
            <Navbar/>
        </div>
    )
}