import logo from "../images/logo.png";

function Footer() {
    return (
        <footer>
            <h1>Join Our Newsletter</h1>
            <h4>Sign up to all the latest news!</h4>
            <form method="get">
                <input type="email" name="email" id="email" placeholder="Email address" />
                <br></br>
                <br></br>
                <input className="signup" type="submit" value="Sign Me Up!" /> <input className="signup" type="reset" />
            </form>
            {/* https://pixabay.com/illustrations/feet-icon-button-silhouette-1459485/ */}
            <a href="index.html"><img src={logo} width="50px" height="50px" alt="logo" /></a>
            <h5>Copyright &copy; 2021 doglibrary.com</h5>
            <h6><i>Created by Phan, Duc Minh Tan</i></h6>
        </footer>
    );
}

export default Footer;