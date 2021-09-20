import React from 'react';
import './Country.css';

const Country = (props) => {

    const { name, flag, population, capital } = props.country;
    // console.log(props.country)

    return (
        <div>
            <div className='country'>
                <h3>Country Name: {name}</h3>
                <img src={flag} alt="" />
                <h4>Country Capital: {capital}</h4>
                <p>Population: {population}</p>
            </div>
        </div>
    );
};

export default Country;