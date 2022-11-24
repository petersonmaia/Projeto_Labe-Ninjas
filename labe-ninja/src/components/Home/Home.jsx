import React from "react";
// import HeaderEFooter from "./componentes/HeaderEFooter"
import styled from "styled-components";
import Ninja from '../img/ninja_1.png';
import './styled.css';


const Body = styled.body`
background-color: #b13703;

@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
    width: 100vw;
    }
`

const H1 = styled.h1`
font-size: 90px;

@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
   font-size: 30px;
   margin-top: 16%;
   text-align: center;
   align-items: center;
    }
`

const BotaoLinkContrate = styled.button`
padding: 25%;
margin-left: 10px;
font-size: 22px;
box-shadow: 0 0 8px 0px;
border-radius: 5px;
border: 0;

@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
  display: flex;
  justify-content: center;
  align-items: center;
    }

`

const BotaoLinkSeja = styled.button`
margin-right: 10px;
font-size: 22px;
box-shadow: 0 0 8px 0px;
border-radius: 5px;
border: 0;

@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
  display: flex;
  justify-content: center;
  align-items: center;
    }

`
const DivPrinc = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 0.4fr 1fr 0.4fr;
background-color: #ffffff;
justify-content: center;

@media screen and (min-width: 375px) and (max-width: 800px) {
display: block;

    }
`
const Div = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 30px;

@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
 display: grid;
 grid-template-columns: 1fr 1fr;

    }

`

const TextoPrincipal = styled.div`
display: flex;
justify-content: center;
text-align: center;
@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
   font-size: 30px;
   margin-top: 16%;
   text-align: center;
   align-items: center;
    }


`
const Img = styled.img`
margin-right: 2%;
width: 100px;
height: 100px;
@media screen and (min-device-width: 375px) and (max-device-width: 800px) {
   width: 50px;
   height: 45px;
   margin-top: 12%;

    }
`
const TextoButton = styled.p`
text-shadow: -5px 10px 12px black;
`

export default class Home extends React.Component {

    render() {
        return (

            <>
                <Body>
                    <DivPrinc>
                        <TextoPrincipal className="texto">
                            <Img src={Ninja} alt="" />
                            <H1>LABENINJAS</H1>
                        </TextoPrincipal>

                        <Div>
                            <BotaoLinkSeja className="btn" onClick={this.props.botaoSerUmNinja}>
                                <strong><TextoButton>Seja um Ninja</TextoButton></strong>
                            </BotaoLinkSeja>

                            <BotaoLinkContrate className="btn" onClick={this.props.botaoContratarNinja}>
                                <strong><TextoButton>Contrate um Ninja</TextoButton></strong>
                            </BotaoLinkContrate>
                        </Div>
                    </DivPrinc>
                </Body>
            </>

        )
    }
}