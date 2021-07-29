import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Dog Library</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/dogs">Our dogs</a></li>
                        <li><a href="/">To-do</a></li>
                        <li><a href="/documentation">Documentation</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;