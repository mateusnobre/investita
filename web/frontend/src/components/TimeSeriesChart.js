import React, { useEffect, useState} from 'react'
import styled from "styled-components"
import colors from './Styles'
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts'
import config from './Token'
import dayjs from 'dayjs'
import axios from 'axios'

function Chart(input){
    return(
        <LineChart id="Chart"
                   width={1100}
                   height={360}
                   data={input.data}
                   margin={{
                       top:35,
                       left:0,
                       right:5,
                       bottom:5
                   }}>
            <Line type="monotone" dataKey="uv" stoke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis name='Date' dataKey="name" tick={{fontSize: 15}}/>
            <YAxis name='BTC Traded Volume' tick={{fontSize: 15}}/>
        </LineChart>
    )
}

export default function TimeSeriesChart(){

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [data_filtered,setDataFiltered] = useState([])
    useEffect( () => {
        const response = axios.get('https://rest.coinapi.io/v1/ohlcv/BTC/USD/history?period_id=1day&time_start=2019-06-01T00:00:00', config)
        response.then( (res) => {
            const historicalData = res.data;
            let newData = []
            for (let i = 0; i < historicalData.length; i++){
                const body = {
                  name: dayjs(historicalData[i].time_period_start).format('DD/MM/YY'),
                  uv: historicalData[i].volume_traded
                }
                newData.push(body)
            }
            setData([...newData])
        })
        response.catch(
            console.log('não rolou')
        )
        console.log(data_filtered)
        }, [count])
    return(
        <TimeSeriesChartBox>
            <Chart data={data}/>
            <ButtonBox>
                <Button onClick={() => setCount(0)}>30d</Button>
                <Button onClick={() => setCount(1)}>6m</Button>
                <Button onClick={() => setCount(2)}>1y</Button>
                <Button onClick={() => setCount(3)}>5y</Button>
            </ButtonBox>
        </TimeSeriesChartBox>
    )
}

const TimeSeriesChartBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 380px;
    border-radius: 10px;
    background-color: aliceblue;
    margin-top: 10px;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
  background-color: ${colors.GREEN_2ND};
  color: black;
  font-size: 20px;
  border-radius: 5px;
  width: 50px;
  margin: 5px 5px;
  cursor: pointer;
`;
