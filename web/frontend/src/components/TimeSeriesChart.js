import React from 'react'
import styled from "styled-components"
export default function TimeSeriesChart(){
    return(
        <TimeSeriesChartBox>
            R$ 1313.4
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