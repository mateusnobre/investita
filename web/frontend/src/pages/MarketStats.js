import React from 'react';
import Side from '../components/Side';
import styled from 'styled-components'

export default function MarketStats(){
    return(
        <MarketStatsBox>
            <Side/>
            MarketStats
         </MarketStatsBox>
     )
}
 
const MarketStatsBox = styled.div`
    display: flex;
`