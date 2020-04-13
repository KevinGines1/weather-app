import React from 'react';
import styled from '@emotion/styled'; // importing styled so that coding js+css (jss) will become much more efficient and convenient
import Location from './Location.js';
import Icon from './Icon.js';
import Condition from './Condition.js';

const WeatherCard = ({temp, condition, city, country}) => { // this just means that the component is only receiving props.temp and props.condition
    // the css for the card component, replacing <div classname="card"></div>
    // for the gradient color, one color will be variable, another one is fixed and the other one will be eliminated (fixed at 0)
    let highColor=0;
    let lowColor=0;
    let bg=null;
    if(temp > 12){ // hot weather
        highColor = (1-((temp-12)/28))*255; // formula for getting the rgb code for hot colors
        lowColor = highColor-150;
        // for hot colors (255, variable, 0)
        bg = `linear-gradient(to top, rgba(255, ${highColor},0), rgb(255, ${lowColor}, 0))`;
    }else if(temp <=12){ // cold weather
        highColor = (1-((temp+20)/32))*255; // formula for getting the rgb code for hot colors
        lowColor = highColor-150;
        // for cold  colors (0, variable, 255)
        bg = `linear-gradient(to top, rgba(0, ${highColor},255), rgb(0, ${lowColor}, 255))`;
    }


    const Card = styled.div`
            margin:0 auto;
            align-items: center;
            background: ${bg};
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
            <Location city={city} country={country}/>
            <Icon condition={condition}/>
            <Condition temp = {temp} condition={condition}/>
        </Card>
        
        // </div>
    );
}
 
export default WeatherCard;

//GIVE CREDIT AND CITE YOUR SOURCE: cloudy icon
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>