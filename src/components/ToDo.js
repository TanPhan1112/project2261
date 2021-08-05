import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';

function Page() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('home.mainTitle')}</h1>
            <h3>{t('home.text')}</h3>
            <p>{t('home.description')}</p>
        </div>
    )
}

function Translate() {
    const { i18n } = useTranslation();
    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <div>
            <button className="btn" onClick={e => { handleChange('en') }}>EN</button>
            <button className="btn" onClick={e => { handleChange('vi') }}>VI</button>
        </div>
    )
}

function ToDo() {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>This translate function is still under development! Please check back later</h1>
                <Suspense fallback="Loading ..." >
                    <Translate />
                    <Page />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default ToDo;