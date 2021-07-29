import React, { useState, useEffect } from "react";
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import Header from "./Header";
import Footer from "./Footer";

function DogsDetail(props) {
    const [random, setRandom] = useState('');

    useEffect(() => {
        const dog = props.location.state.dog;
        axios.get(`https://dog.ceo/api/breed/${dog}/images/random/18`)
            .then(result => {
                const breed = result.data.message;
                setRandom(breed);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const PHOTO_SET = [
        {
            src: random[0],
            width: 8,
            height: 8
        },
        {
            src: random[1],
            width: 5,
            height: 5
        },
        {
            src: random[2],
            width: 7,
            height: 6
        },
        {
            src: random[3],
            width: 4,
            height: 3
        },
        {
            src: random[4],
            width: 4,
            height: 4
        },
        {
            src: random[5],
            width: 5,
            height: 4
        },
        {
            src: random[6],
            width: 6,
            height: 5
        },
        {
            src: random[7],
            width: 5,
            height: 6
        },
        {
            src: random[8],
            width: 3,
            height: 3
        },
        {
            src: random[9],
            width: 7,
            height: 7
        },
        {
            src: random[10],
            width: 6,
            height: 6
        },
        {
            src: random[11],
            width: 4,
            height: 5
        },
        {
            src: random[12],
            width: 6,
            height: 5
        },
        {
            src: random[13],
            width: 5,
            height: 6
        },
        {
            src: random[14],
            width: 3,
            height: 3
        },
        {
            src: random[15],
            width: 7,
            height: 7
        },
        {
            src: random[16],
            width: 6,
            height: 6
        },
        {
            src: random[17],
            width: 4,
            height: 5
        }
    ];

    return (
        <div>
            <Header />
            <div className="container">
                <Gallery photos={PHOTO_SET} />
            </div>
            <Footer />
        </div>
    );
}

export default DogsDetail;