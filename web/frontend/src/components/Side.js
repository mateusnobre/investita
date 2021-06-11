import React from 'react';
import { BsGrid } from 'react-icons/bs';
import { BiWallet, BiLogOut } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { IoStatsChartOutline, IoWalletOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import colors from './Styles'
import {Link} from 'react-router-dom';

const SideBox = withStyles({
  root: {
    background: colors.DARK_MAIN,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    position: 'fixed',
    width: '20%',
    height: '100%',
    left: 0,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Box);

const IconBox = withStyles({
  root: {
    background: colors.GRAY,
    display: 'flex',
    flexDirection: 'column',
    color: colors.DARK_2ND,
    marginTop: '5px',
    marginBottom: '5px',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Box);


export default function Side(){
    return(
        <SideBox>
            <IconBox>
                <Link to= '/'>
                    <AiOutlineHome size={20}/>
                </Link>
            </IconBox>
            <IconBox>
                <Link to= '/wallet'>
                    <IoWalletOutline size={20}/>
                </Link>
            </IconBox>
            <IconBox>
                <Link to= '/stats'>
                    <IoStatsChartOutline size={20}/>
                </Link>
            </IconBox>
            <IconBox>
                <Link to= '/my-account'>
                    <FiUser size={20}/>
                </Link>
            </IconBox>
            <IconBox>
                <Link to= '/sign-in'>
                    <BiLogOut size={20}/>
                </Link>
            </IconBox>
        </SideBox>
    )
}