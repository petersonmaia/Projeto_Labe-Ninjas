import React from "react";
// import HeaderEFooter from "./componentes/HeaderEFooter"
import styled from "styled-components";
import Ninja from '../img/ninja_1.png';
import './styled.css';


const Body = styled.body`
height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
background-color: #fe7e01;
border: 1px solid black;
align-items: center;
text-align: center;
max-height: 100vh;
@media screen and (min-device-width: 320px) and (max-device-width: 860px) {
    width: 100vw;
    }
`

const H1 = styled.h1`
font-size: 100px;
margin-top: 8%;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 37px;
   margin-top: 16%;
    }
`


const BotaoLinkContrate = styled.button`
text-decoration: none;
font-size: 20px;
border: 1px solid black;
margin: 10px;
padding: 100px;
padding-bottom: 11%;
text-align: center;
box-shadow: 0 0 9px 1px;
background-color: #fbb34c; 
border-radius: 5%;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 20px;
   padding: 50px;
    }
`

const BotaoLinkSeja = styled.button`
text-decoration: none;
font-size: 20px;
border: 1px solid black;
margin: 10px;
padding: 100px;
padding-left: 110px;
padding-right: 110px;
padding-bottom: 11%;
text-align: center;
box-shadow: 0 0 9px 1px;
background-color: #fbb34c; 
border-radius: 5%;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 20px;
  padding: 50px;
  padding-left: 70px;
  padding-right: 70px ;
    }
`

const Div = styled.div`
margin-top: 10%;
`

const TextoPrincipal = styled.div`
display: flex;
justify-content: center ;
`
const Img = styled.img`
margin-top: 8%;
margin-right: 3%;
width: 110px;
height: 110px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   width: 60px;
   height: 60px;
   margin-top: 10%;
    }
`
const TextoButton = styled.p`
text-shadow: 1px 3px 4px black;
`

export default class Home extends React.Component {

    render() {
        return (

            <>
                <Body>
                    <TextoPrincipal className="texto">
                        <Img src={Ninja} alt="" />
                        <H1>LABENINJAS</H1>
                    </TextoPrincipal>

                    <Div>
                        <BotaoLinkSeja className="btn" onClick={this.props.botaoSerUmNinja}>
                        <strong><TextoButton>Seja um</TextoButton></strong>
                        <strong><TextoButton> Ninja</TextoButton></strong>
                        </BotaoLinkSeja>

                        <BotaoLinkContrate className="btn" onClick={this.props.botaoContratarNinja}>
                        <strong><TextoButton>Contrate um</TextoButton></strong>
                        <strong><TextoButton>Ninja</TextoButton></strong>
                        </BotaoLinkContrate>
                    </Div>
                </Body>
            </>

        )
    }
}