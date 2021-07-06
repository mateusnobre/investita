import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import TimeSeriesChart from './TimeSeriesChart'
import Asset from './Asset'
import config from './Token'
import axios from 'axios'

export default function Overview(){
    const [coins, setCoins] = useState([]);
    useEffect(async () => {
        //const assets_icons = await axios.get('https://rest.coinapi.io/v1/assets/icons/30', config)
        const assets_data = await axios.get('https://rest.coinapi.io/v1/assets', config)
        for (let i = 0; i < assets_data.data.length; i++){
            const body = {
              "name":  assets_data.data[i].name,
              "asset_id": assets_data.data[i].asset_id,
              "is_crypto": assets_data.data[i].type_is_crypto,
              "volume_1hrs_usd": assets_data.data[i].volume_1hrs_usd,
              "volume_1day_usd": assets_data.data[i].volume_1day_usd,
              "volume_1mth_usd": assets_data.data[i].volume_1mth_usd,
              "price_usd": assets_data.data[i].price_usd,
              "icon" :  "some_icon"
            }
            console.log(body)
            await axios.post('http://localhost:8000/api/cryptocurrencies', body)
        }
        setCoins([])
    }, [])
    return(
        <OverviewBox>
            <Title>Hi, Fulano</Title>
            <TopBox>
                <PortfolioBox>
                    Portfolio
                    <TimeSeriesChart/>
                </PortfolioBox>
                <MyAssetsBox>
                    Your Assets
                    <AssetsBox>
                        {coins.map((coin) => (
                            <Asset name={coin.asset_id}
                             volatility={0.14}
                             quote='USD'
                             rate={124.142}
                             icon={coin.url}/>
                        ))}
                    </AssetsBox>
                </MyAssetsBox>
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
    margin-bottom: 20px
`
const TopBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
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
    overflow-x: scroll;`