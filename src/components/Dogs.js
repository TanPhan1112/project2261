import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';

function Dogs() {
    const [dogs, setDogs] = useState([]);
    const [q, setQ] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breeds/list/all`)
            .then(result => {
                const dogs = Object.keys(result.data.message);
                setDogs(dogs);
                localStorage.setItem("dogs", JSON.stringify(dogs));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function search(dogs) {
        return dogs.filter((dog) => {
            return (
                dog
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="input-group">
                    <form onSubmit={e => { e.preventDefault(); }}>
                        <input type="text" className="searchbar" placeholder={t('search.searchBar')} name="search" value={q} onChange={(e) => setQ(e.target.value)} />
                    </form>
                </div>
                <div className="list-group">
                    <ul className="card-grid">
                        {search(dogs).map((dog, i) => (
                            <Link key={i} type="button" to={{ pathname: '/dogsdetail', state: { dog } }} className="list-group-item list-group-item-action" value={dog}>
                                {dog}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dogs;