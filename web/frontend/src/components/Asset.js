import React from 'react';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi'

export default function Asset(){
    return(
        <AssetBox>
            <AmountBox>
                1.25 BTC
                $ 2949.04
            </AmountBox>
            <Variation>+0.14%</Variation>
        </AssetBox>
    )
}

const AssetBox = styled.div`
    display: flex;
    position: relative;
    width: 300px;
    height: 35vh;
    border-radius: 10px;
    background-color: aliceblue;
    margin-right: 15px;
`

const AmountBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
`
const Variation = styled.div`
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-weight: 300;
    font-size: 20px;
`