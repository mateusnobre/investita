import styled from 'styled-components'
import React  from 'react';

export default function FormsButton(props){
    return(
        <FormsButtonBox>
            <button type="submit">
                {props.text}
            </button>
        </FormsButtonBox>
    )
}

const FormsButtonBox = styled.div`
    button{
        width: 326px;
        height: 46px;
        background: #FFFAFB;
        border-radius: 5px;
        color: #131515;
        text-align: center;
        line-height: 46px;
        font-weight: 700;
        user-select: none;
        font-size: 20px;
        border: none;
        :hover{
            opacity: 0.8;
        }
    }
`