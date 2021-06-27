import React from 'react';
import Side from './Side';
import Overview from './Overview'
import styled from 'styled-components'

export default function Home(){
    return(
        <HomeBox>
            <Side/>
            <Overview/>
        </HomeBox>
     )
}
 
const HomeBox = styled.div`
    display: flex;
`