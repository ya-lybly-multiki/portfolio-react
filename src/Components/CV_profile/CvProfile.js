import React from 'react';
import {Button} from "../utils/Button";
import s from './CvProfile.module.scss'
import {Link} from "react-router-dom";
import Portfolio from '../../assets/Portfolio/CV-Trifonov.pdf'


const CvProfile = () => {
    return (
        <div className={s.cvProfile}>
            <h3>Do you want see more info? Check my CV</h3>
            <Link to={Portfolio} target="_blank" download>
                <Button title={'Download CV'} icon={'download'}/>
            </Link>
        </div>
    );
};

export default CvProfile;