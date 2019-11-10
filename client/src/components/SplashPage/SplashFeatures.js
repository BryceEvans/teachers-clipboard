import React from 'react'
import styled from 'styled-components';

const SplashFeatures = () => {
    return (
        <EclipmentFeatures id="features">
            <h2>
                These are the great features...
            </h2>
        </EclipmentFeatures>
    )
}

export default SplashFeatures

const EclipmentFeatures = styled.div`
background-color: lightblue;
padding-top: 55px;
border: 1px solid pink;
height: 100vh;
width: 100%;
`;