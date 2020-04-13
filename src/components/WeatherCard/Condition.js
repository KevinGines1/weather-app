import React from 'react'
import styled from '@emotion/styled'

const Condition = ({temp, condition}) => { // this component only receives parameters that are passed from WeatherCard component

    const Temperature = styled.h1`
        font-family: 'Fira Sans', sans-serif;
        font-size: 2rem;
        font-weight: 200;
    `

    const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `
    return (
        <>
            <Temperature>{temp}°C</Temperature>
            <State>{condition}</State>
        </>
     );
}
 
export default Condition;