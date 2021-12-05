import React from "react";
import {Button} from "../utils/Button";
import s from "./Contacts.module.scss"
import {Title} from "../utils/Title";


export function Contacts() {
    return (
        <div id={"Contacts"} className={s.contactsWrapper}>
            <Title title={"Contact"} width={"230px"}/>
            <p>Have a question or want to work together?</p>
            <form className={s.formWrapper}>
                <div>
                    <input className={s.formInput} type={"text"} placeholder={"Name"}/>
                </div>
                <div>
                    <input className={s.formInput} type={"email"} placeholder={"Enter Email"}/>
                </div>
                <textarea className={s.formInput} placeholder={"Your Message"} />
                <Button  title={"SUBMIT"}/>
            </form>
        </div>
    )
}