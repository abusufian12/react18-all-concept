import React, { useState }from 'react';
import ReactDOM from "react-dom/client";

function FavoriteColor(){
    const [color, setColor] = useState("white");

    return (
        <>
            <h2>My Favorite Color is: {color}</h2>
            <button type='button' onClick={ () => setColor("blue")}>
                Blue
            </button>
        </>
    )
}

function Car(){
    const [car, setCar] = useState({
        brand: 'Toyta',
        color: 'Black',
        model: 'Aleyen',
        year: '2001'
    });

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: 'Red'}
        })
    }

    return (
        <>
            <h2>My Car is: {car.brand}</h2>
            <p>Color: {car.color}</p>
            <p>Model: {car.model}</p>
            <p>year: {car.year}</p>
            <button type='button' onClick={updateColor}>
                Red
            </button>
        </>
    )
}

export {FavoriteColor, Car};