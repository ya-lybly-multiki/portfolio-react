import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={s.footerWrapper}>
                <p>my Phone: +79524300827</p>
                <p>my email:
                    trifonov_artem@icloud.com</p>
            </div>
            <div className={s.footerLinks}>

            </div>
        </>
    );
};

export default Footer;