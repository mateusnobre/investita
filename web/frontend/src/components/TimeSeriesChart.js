import React, { useState} from 'react'
import styled from "styled-components"
import colors from './Styles'
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts'

function Chart(input){
    return(
        <LineChart id="Chart"
                   width={500}
                   height={240}
                   data={input.data}
                   margin={{
                       top:35,
                       left:0,
                       right:5,
                       bottom:5
                   }}>
            <Line type="monotone" dataKey="uv" stoke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" tick={{fontSize: 15}}/>
            <YAxis tick={{fontSize: 15}}/>
        </LineChart>
    )
}

export default function TimeSeriesChart(){

    const [count, setCount] = useState(0);
    const data1 = [{name: '04/07', uv: 400}, {name: '05/07', uv: 300}, {name: '06/07', uv: 225}];
    const data2 = [{name: '30/06', uv: 350},{name: '01/07', uv: 500}, {name: '02/07', uv: 310}, {name: '03/07', uv: 225},{name: '04/07', uv: 400}, {name: '05/07', uv: 300}, {name: '06/07', uv: 225}];
    const data3 = [{name: 'May', uv: 200}, {name: 'Jun', uv: 350}, {name: 'Jul', uv: 225}];
    const data4 = [{name: 'Aug', uv: 150}, {name: 'Sep', uv: 190}, {name: 'Oct', uv: 180},{name: 'Nov', uv: 280}, {name: 'Dec', uv: 225}, {name: 'Jan', uv: 165},{name: 'Feb', uv: 190}, {name: 'Mar', uv: 250}, {name: 'Apr', uv: 180},{name: 'May', uv: 200}, {name: 'Jun', uv: 350}, {name: 'Jul', uv: 225}];
    if(count === 0) var data = data1;
    else if(count === 1) var data = data2;
    else if(count === 2) var data = data3;
    else var data = data4;
    return(
        <TimeSeriesChartBox>
            <tr>
                <Button onClick={() => setCount(0)}>3d</Button>
                <Button onClick={() => setCount(1)}>7d</Button>
                <Button onClick={() => setCount(2)}>3m</Button>
                <Button onClick={() => setCount(3)}>1y</Button>
            </tr>
            <tr>
                <Chart data={data}/>
            </tr>
        </TimeSeriesChartBox>
    )
}

const TimeSeriesChartBox = styled.div`
    display: flex;
    width: 100%;
    height: 35vh;
    border-radius: 10px;
    background-color: aliceblue;
    margin-top: 10px;
`
const Button = styled.button`
  background-color: ${colors.GREEN_2ND};
  color: black;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 5px 5px;
  cursor: pointer;
`;
