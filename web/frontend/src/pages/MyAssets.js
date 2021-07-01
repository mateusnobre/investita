import React from 'react';
import Side from '../components/Side';
import styled from 'styled-components'

export default function MyAssets(){
    return(
        <MyAssetsBox>
            <Side/>
            MyAssets
         </MyAssetsBox>
     )
}
 
const MyAssetsBox = styled.div`
    display: flex;
`