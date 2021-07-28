import React, { useState, useEffect } from "react";
import axios from 'axios';
import Gallery from 'react-photo-gallery';

function Home() {
    const [random1, setRandom1] = useState('');
    const [random2, setRandom2] = useState('');
    const [random3, setRandom3] = useState('');
    const [random4, setRandom4] = useState('');
    const [random5, setRandom5] = useState('');
    const [random6, setRandom6] = useState('');

    let one = "https://dog.ceo/api/breeds/image/random";
    let two = "https://dog.ceo/api/breeds/image/random";
    let three = "https://dog.ceo/api/breeds/image/random";
    let four = "https://dog.ceo/api/breeds/image/random";
    let five = "https://dog.ceo/api/breeds/image/random";
    let six = "https://dog.ceo/api/breeds/image/random";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);

    useEffect(() => {
        axios
            .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0];
                    const responseTwo = responses[1];
                    const responesThree = responses[2];
                    const requestFour = responses[3];
                    const requestFive = responses[4];
                    const requestSix = responses[5];

                    setRandom1(responseOne.data);
                    setRandom2(responseTwo.data);
                    setRandom3(responesThree.data);
                    setRandom4(requestFour.data);
                    setRandom5(requestFive.data);
                    setRandom6(requestSix.data);
                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    }, []);

    const PHOTO_SET = [
        {
            src: random1.message,
            width: 5,
            height: 6
        },
        {
            src: random2.message,
            width: 5,
            height: 5
        },
        {
            src: random3.message,
            width: 7,
            height: 6
        },
        {
            src: random4.message,
            width: 4,
            height: 3
        },
        {
            src: random5.message,
            width: 4,
            height: 4
        },
        {
            src: random6.message,
            width: 5,
            height: 4
        },
        {
            src: random3.message,
            width: 6,
            height: 5
        },
        {
            src: random2.message,
            width: 5,
            height: 5
        },
        {
            src: random1.message,
            width: 3,
            height: 3
        },
        {
            src: random6.message,
            width: 4,
            height: 3
        },
        {
            src: random4.message,
            width: 6,
            height: 6
        },
        {
            src: random5.message,
            width: 4,
            height: 3
        }
    ];

    return (
        <body>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Dog Library</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/Home">Home</a></li>
                        <li><a href="/dogs">Our dogs</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">To-do</a></li>
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
                <Gallery photos={PHOTO_SET} />
            </div>
        </body>
    );
}

export default Home;