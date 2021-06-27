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
    width: 510px;
    height: 210px;
    border-radius: 10px;
    background-color: aliceblue;
`