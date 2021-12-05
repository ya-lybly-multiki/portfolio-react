import React from 'react'
import s from './Navigation.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-scroll'


export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <Fade direction={'right'} triggerOnce>
                <div className={s.navbar}>
                    <Link to={'Main'} smooth duration={600} spy activeClass={s.active}>Main</Link>
                    <Link to={'Skills'} smooth duration={600} spy activeClass={s.active} offset={5}>Skills</Link>
                    <Link to={'Projects'} smooth duration={600} spy activeClass={s.active} offset={5}>Projects</Link>
                    <Link to={'Contacts'} smooth duration={600} spy activeClass={s.active} offset={5}>Contacts</Link>
                </div>
            </Fade>
        </div>
    )
}