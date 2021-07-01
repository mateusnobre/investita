import React from 'react';
import Side from '../components/Side';
import styled from 'styled-components'

export default function MyPortfolio(){
    return(
        <MyPortfolioBox>
            <Side/>
            MyPorfolio
         </MyPortfolioBox>
     )
}
 
const MyPortfolioBox = styled.div`
    display: flex;
`