import styled from "styled-components";
import React from 'react'
import TimeSeriesChart from './TimeSeriesChart'

export default function Overview(){
    return(
        <OverviewBox>
            <Title>Hi, Mateus (Jacaré)</Title>
            <TopBox>
                <PortfolioBox>
                    Traded Bitcoin Volume per Date 
                    <TimeSeriesChart/>
                </PortfolioBox>
                </TopBox>
        </OverviewBox>
    )
}

const OverviewBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    margin-left: 10vw;
    margin-right: 5vw;
    padding-right: 10px;
    width: 89%;
    height: 85vh;
    font-weight: 700;
    font-size: 30px;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 20px;
    margin-top: 10vh;
    margin-bottom: 0vh;
`
const Title = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const TopBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`
const PortfolioBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
`