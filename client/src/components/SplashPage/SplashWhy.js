import React from 'react'
import styled from 'styled-components';

const SplashWhy = () => {
    return (
        <WhyEclipment id="why">
            <h2>
                This is why you should use Eclipment....
            </h2>
        </WhyEclipment>
    )
}


export default SplashWhy


const WhyEclipment = styled.div`
background-color: white;
padding-top: 55px;
// border: 1px solid pink;
height: 100vh;
width: 100%;
`;