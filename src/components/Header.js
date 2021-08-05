import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import './styles/nav.css';

function Header() {
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
                    <a href="/">Dog Library</a>
                    <a href="/Home">Home</a>
                    <a href="/dogs">Our dogs</a>
                    <a href="/todo">To-do</a>
                    <a href="/documentation">Documentation</a>
                    <a href="#/" className="icon" onClick={myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
            <ThemeSwitcher />
        </div>
    );
}

export default Header;