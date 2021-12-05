import React from "react";
import s from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import Benefits from "./AboutBenefits/Benefits";
import {Title} from "../utils/Title";
import {skillsDB} from "./SkillDB";
import {BenefitsDB} from "./AboutBenefits/BenefitsDB";


export function About() {

    const skillsList = skillsDB.map((s, i) =>
        <Skill key={i} title={s.title} icon={s.icon} description={s.description}/>)
    const benefitsList = BenefitsDB.map((b, i) =>
        <Benefits key={i} title={b.title} icon={b.img} description={b.description}/>)

    return (
        <div id={"Skills"} className={s.skills}>
            <Title title={"About"} width={"178px"}/>
            <div className={s.BenefitWrapper}>
            {benefitsList}
            </div>
            <div className={s.skillsContainer}>
                {skillsList}
            </div>
        </div>
    )
}