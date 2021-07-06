import React from 'react';
import Side from '../components/Side';
import MarketOverview from '../components/MarketOverview'
import styled from 'styled-components'
export default function MarketStats(){
    return(
        <HomeBox>
            <Side/>
            <MarketOverview/>
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