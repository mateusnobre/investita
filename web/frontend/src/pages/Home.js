import React from 'react';
import Side from '../components/Side';
import Overview from '../components/Overview'
import styled from 'styled-components'
export default function Home(){
    return(
        <HomeBox>
            <Side/>
            <Overview/>
            <Title>Investita</Title>
        </HomeBox>
     )
}
 
const HomeBox = styled.div`
    display: flex;
    position: relative;
`

const Title = styled.div`
    font-family: Saira Stencil One;
    color: white;
    font-size: 36px;
    margin-bottom: 24px;
    user-select: none;
    position: absolute;
    top: 10px;
    left: 50vw;
    `