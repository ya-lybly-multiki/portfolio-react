import React from "react";
import s from "./Projects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../utils/Title";
import {ProjectDB} from "./Project/ProjectDB";
import {Fade} from "react-awesome-reveal";

export function Projects() {

    const ProjectsItems = ProjectDB.map((p,i)=> <Project key={i} title={p.title}
                                                         icon={p.img}
                                                         description={p.description}
                                                         linksGit={p.refs.code}
                                                         linksPage={p.refs.project}
    />)

    return (
        <Fade duration={1500} direction={'bottom-right'} triggerOnce={false}>
            <div id={"Projects"} className={s.projectWrapper}>
                <Title title={"My Project"} width={"300px"}/>
                <div className={s.projectsContainer}>
                    {ProjectsItems}
                </div>
            </div>
        </Fade>

    )
}