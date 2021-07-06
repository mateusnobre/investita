import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import config from './Token'
import EnhancedTable from './EnhancedTable'
import axios from 'axios'

export default function Overview(){
    const [coins, setCoins] = useState([]);
    useEffect(async () => {
        //const assets_icons = await axios.get('https://rest.coinapi.io/v1/assets/icons/30', config)
        const assets_data = await axios.get('https://rest.coinapi.io/v1/assets', config)
        let newCoins = []
        for (let i = 0; i < assets_data.data.length; i++){
            if(assets_data.data[i].volume_1mth_usd !== 0) { 
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
                newCoins.push(body)
                console.log(body)
            }
        }
        setCoins(newCoins)
    }, [])
    return(
        <OverviewBox>
            <Title>A brief summary</Title>
            <TopBox>
                <EnhancedTable rows={coins}/>
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