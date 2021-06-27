import styled from "styled-components";
import React from 'react'
import TimeSeriesChart from './TimeSeriesChart'
import Asset from './Asset'

export default function Overview(){
    return(
        <OverviewBox>
            Overview
            <TopBox>
                <PortfolioBox>
                    Portfolio
                    <TimeSeriesChart/>
                </PortfolioBox>
                <MyAssetsBox>
                    Your Assets
                    <AssetsBox>
                        <Asset name='Bitcoin'/>
                        <Asset name='Ethereum'/>
                        <Asset name='Dogecoin'/>
                    </AssetsBox>
                </MyAssetsBox>
                </TopBox>
            <BottomBox>
                as
            </BottomBox>
        </OverviewBox>
    )
}

const OverviewBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    font-weight: 700;
    font-size: 30px;
    align-items: flex-start;
    padding-left: 20px;
`
const PortfolioBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 300px;
`

const MyAssetsBox = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    height: 300px;
`
const AssetsBox = styled.div`
    display: flex;
`
const TopBox = styled.div`
    display: flex;
    width: 80vw;
`
const BottomBox = styled.div`
    display: flex;
`