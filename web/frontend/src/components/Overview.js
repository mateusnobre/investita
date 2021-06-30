import styled from "styled-components";
import React from 'react'
import TimeSeriesChart from './TimeSeriesChart'
import Asset from './Asset'
import Ad from "./Ad";
export default function Overview(){
    return(
        <OverviewBox>
            <Title>Overview</Title>
            <TopBox>
                <PortfolioBox>
                    Portfolio
                    <TimeSeriesChart/>
                </PortfolioBox>
                <MyAssetsBox>
                    Your Assets
                    <AssetsBox>
                        <Asset name='BTC' volatility={0.14} quote='USD' rate={124.142}  icon='https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png'/>
                    </AssetsBox>
                </MyAssetsBox>
                </TopBox>
            <BottomBox>
                <InfoTable>
                    Market is down 0.80%
                </InfoTable>
            </BottomBox>
        </OverviewBox>
    )
}

const OverviewBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 30px;
    margin-left: 10vw;
    margin-right: 10px;
    padding-right: 10px;
    width: 90%;
    font-weight: 700;
    font-size: 30px;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 20px;
    margin-top: 10px;
`
const Title = styled.div`
    margin-top: 20px;
    margin-bottom: 20px
`
const TopBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const BottomBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
    margin-top: 10px;
    margin-left: 10px;
    width: 100%;
    overflow-x: scroll;
`
const InfoTable = styled.div`
    display: flex;
    flex-direction: space-between;
    height: 35vh;
`