import React from 'react';
import Ninja from '../img/ninja_1.png';
import IconButtons from './IconButtons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';


const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 10px 30px;
align-items: center;
background-color: #fe7e01;
`
const Logo = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #d86c01;
    }
`
const Img = styled.img`
    width: 50px;
`

export default class HeaderEFooter extends React.Component {


    render() {
        return (
            <div>
                <Header>
                    <Logo onClick={this.props.voltarParaHome}>
                        <Img src={Ninja} />
                        <h1>Labeninjas</h1>
                    </Logo>
                    <IconButtons clicouCarrinho={this.props.clicouCarrinho} itensNoCarrinho={this.props.itensNoCarrinho}/>
                </Header>
            </div>

        )


    }
}