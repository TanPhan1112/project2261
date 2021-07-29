import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";

function Dogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breeds/list/all`)
            .then(result => {
                const dogs = Object.keys(result.data.message);
                setDogs(dogs);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const dogList = dogs
        .map((dog) => (
            <Link type="button" to={{ pathname: '/dogsdetail', state: { dog } }} className="list-group-item list-group-item-action" value={dog}>
                {dog}
            </Link>
        ));

    return (
        <body>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Dog Library</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="/Home">Home</a></li>
                        <li className="active"><a href="/dogs">Our dogs</a></li>
                        <li><a href="#">To-do</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                    <form className="navbar-form navbar-left" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
            <div className="container">
                <div className="list-group">
                    {dogList}
                </div>
            </div>
            <Footer />
        </body>
    );
}

export default Dogs;