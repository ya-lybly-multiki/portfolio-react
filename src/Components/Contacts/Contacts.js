import React from "react";
import {Button} from "../utils/Button";
import s from "./Contacts.module.scss"
import {Title} from "../utils/Title";


export function Contacts() {



    return (
        <div id={"Contacts"} className={s.contactsWrapper}>
            <Title title={"Contact"} width={"230px"}/>
            <form className={s.formWrapper}>
                <div>
                    <input className={s.formInput} type={"text"} placeholder={"Name"}/>
                </div>
                <div>
                    <input className={s.formInput} type={"email"} placeholder={"Enter Email"}/>
                </div>
                <textarea className={s.formInput} placeholder={"Your Message"} />
                <Button classN={{border:"2px solid black"} } title={"SUBMIT"}/>
            </form>
        </div>
    )
}