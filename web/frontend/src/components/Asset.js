import React from 'react';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import colors from './Styles'
export default function Asset(props){
    return(
        <AssetBox>
            <AmountBox>
                <h3>
                    {props.name} 1.00
                </h3>
                {props.quote} {props.rate}
            </AmountBox>
            <Variation>+{props.volatility}%</Variation>
            <Icon><img src={props.icon}/></Icon>
            <Options><BiDotsVerticalRounded size={30}/></Options>
        </AssetBox>
    )
}

const AssetBox = styled.div`
    display: flex;
    position: relative;
    width: 300px;
    height: 35vh;
    border-radius: 10px;
    background-color: ${colors.GREEN_2ND};
    margin-right: 15px;
`

const AmountBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    font-size: 20px;
    text-align: start;
    margin-left: 5%;
    margin-top: 5%;
    h3 {
        line-height: 10px;
        color: ${colors.GRAY}
    }
    color: ${colors.DARK_2ND}
`
const Variation = styled.div`
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-weight: 300;
    font-size: 20px;
`

const Icon = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    img {
        width: 30px;
        height: 30px;
    }
`

const Options = styled.div`
    position: absolute;
    top: 5%;
    right: 2.5%;
`