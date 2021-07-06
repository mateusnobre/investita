import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoStatsChartOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import colors from './Styles'
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';

const SideBox = withStyles({
  root: {
    background: colors.DARK_MAIN,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    position: 'fixed',
    width: '10vw',
    height: '100%',
    left: 0,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Box);

const MainCoinsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
`


export default function Side(){
    const history = useHistory()
    return(
        <SideBox>
            <Link to= '/home' onClick={() => history.push('/home')} exact>
                <AiOutlineHome color='grey' size={35}/>
            </Link>
            <MainCoinsBox>
                <Link to= '/market-stats' onClick={() => history.push('/market-stats')}>
                    <IoStatsChartOutline color='white'  size={30}/>
                </Link>
            </MainCoinsBox>
            <Link to= '/login' onClick={() => history.push('/login')}>
                <BiLogOut color='grey'  size={25}/>
            </Link>
        </SideBox>
    )
}