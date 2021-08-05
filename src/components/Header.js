import React, { Suspense } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import './styles/nav.css';
import { useTranslation } from 'react-i18next';

function Translate() {
    const { i18n } = useTranslation();
    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="language">
            <button className="btn" onClick={e => { handleChange('en') }}>EN</button>
            <button className="btn" onClick={e => { handleChange('vi') }}>VI</button>
        </div>
    )
}

function HeaderTranslate() {
    const { t } = useTranslation();

    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return (
        <div>
            <nav>
                <div className="topnav" id="myTopnav">
                    <a href="/">{t('nav.homeTitle')}</a>
                    <a href="/Home">{t('nav.home')}</a>
                    <a href="/dogs">{t('nav.ourDogs')}</a>
                    <a href="/todo">{t('nav.toDo')}</a>
                    <a href="/documentation">{t('nav.documentation')}</a>
                    <Translate />
                    <a href="#/" className="icon" onClick={myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
            <ThemeSwitcher />
        </div>
    )
}

function Header() {
    return (
        <Suspense fallback="Loading ..." >
            <HeaderTranslate />
        </Suspense>
    );
}

export default Header;