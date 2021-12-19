import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={s.footerWrapper}>
                <p>my Phone: +79524300827</p>
                <p>my email:
                    trifonov_artem@icloud.com</p>
            </div>
            <h3 >@2021 Artyom Trifonov. All rights reserved</h3>
        </div>
    );
};

export default Footer;