import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { IoStatsChartOutline, IoWalletOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import colors from './Styles'
import {Link} from 'react-router-dom';
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
    height: 200px;
    justify-content: space-between;
`


export default function Side(){
    return(
        <SideBox>
            <Link to= '/'>
                <AiOutlineHome color='grey' size={35}/>
            </Link>
            <MainCoinsBox>
                <Link to= '/my-portfolio'>
                    <IoWalletOutline color='white'  size={30}/>
                </Link>
                <Link to= '/my-assets'>
                    <FiUser color='white'  size={30}/>
                </Link>
                <Link to= '/market-stats'>
                    <IoStatsChartOutline color='white'  size={30}/>
                </Link>
            </MainCoinsBox>
            <Link to= '/sign-in'>
                <BiLogOut color='grey'  size={25}/>
            </Link>
        </SideBox>
    )
}