import React from "react";

import s from './Benefit.module.scss'







const Benefits = (props) => {



    return (
            <div key={props.key} className={s.BenefitItem}>
                <div className={s.HexWrap}>
                    <div className={s.Hexagon}>
                        <img className={s.Img} src={props.icon}/>
                    </div>
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
    );
};

export default Benefits;