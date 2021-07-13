import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './Hero';
import './HeroList.css';

function HeroList() {
    const [heroes, setHeroes] = useState([]);
    const [isStrong, setIsStrong] = useState(false);

    useEffect(() => {
        axios
        .get("https://lit-badlands-40023.herokuapp.com/heros")
        .then((res) => res.data)
        .then((data) => setHeroes(data))
    }, [])

    return (
        <div className="HeroList">
            <button className="filter-btn" onClick={() => setIsStrong(!isStrong)}>
                {isStrong ? 'Show All Heroes' : 'Show Strong Heroes'}
            </button>
            <div className="hero-container">
                {!isStrong
                ? 
                heroes
                .map((hero) => (
                    <div key={hero.id}>
                        <Hero hero={hero} />
                    </div>
                ))
                :
                heroes
                .filter((hero) => hero.force > 75)
                .map((hero) => (
                    <div key={hero.id}>
                        <Hero hero={hero} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroList
