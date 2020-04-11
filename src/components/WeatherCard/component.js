import React from 'react';
import styled from '@emotion/styled'; // importing styled so that coding js+css (jss) will become much more efficient and convenient
import Location from './Location.js';
import Icon from './Icon.js';
import Condition from './Condition.js';

const WeatherCard = (props) => {
    // the css for the card component, replacing <div classname="card"></div>
    const redValue =100;
    const Card = styled.div`
            margin:0 auto;
            align-items: center;
            background: linear-gradient(to bottom, rgba(${redValue}, 200, 200), pink);
            width: 200px;
            height: 240px;
            display:flex;
            flex-direction:column;
            justify-content: space-around;
            border-radius: 15px;
        `
    return ( 
        // <div className="card">
        <Card>
            <Location/>
            <Icon/>
            <Condition/>
        </Card>
        
        // </div>
    );
}
 
export default WeatherCard;

//GIVE CREDIT AND CITE YOUR SOURCE: cloudy icon
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>