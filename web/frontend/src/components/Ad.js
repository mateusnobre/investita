import React from 'react';
import styled from 'styled-components';
export default function Ad(){
    return(
        <AdBox>
            <img src='https://cdn.dribbble.com/users/1325623/screenshots/15831358/media/6b17ba172c1e4c4d1c4d704caa23b26a.png?compress=1&resize=1200x900'/>
        </AdBox>
    )
}
    
const AdBox = styled.div`
    img {
        width: 400px;
        height: 35vh;
        object-fit: fit;
        border-radius: 20px;
    }
`