import React, { Suspense } from "react";
import logo from "../images/logo.png";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <Suspense fallback="Loading ..." >
            <footer>
                <h1>{t('footer.footerTitle')}</h1>
                <h4>{t('footer.footerHeading')}</h4>
                <form method="get">
                    <input type="email" name="email" id="email" placeholder={t('footer.email')} />
                    <br></br>
                    <br></br>
                    <input className="signup" type="submit" value={t('footer.signUp')} /> <input className="signup" type="reset" value={t('footer.reset')} />
                </form>
                {/* https://pixabay.com/illustrations/feet-icon-button-silhouette-1459485/ */}
                <a href="/"><img src={logo} width="50px" height="50px" alt="logo" /></a>
                <h5>{t('footer.copyright')} &copy; 2021 doglibrary.com</h5>
                <h6><i>{t('footer.createdBy')} Phan, Duc Minh Tan</i></h6>
            </footer>
        </Suspense>
    );
}

export default Footer;