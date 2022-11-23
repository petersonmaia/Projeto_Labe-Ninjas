import React from 'react';
import styled from 'styled-components';
import Face from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Whatsapp from '../img/whatsapp.png';
// import axios from "axios"

const Container = styled.div`
display: grid;
border: 1px solid black;
height: 100vh;
grid-template-rows: 100px 1fr 100px;
grid-template-areas: "h h h"
                      "b b b"
                      "f f f";   
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
width: 100vw;
height: 100vh;
    }                                                        
`

const Footer = styled.footer`
grid-area: f;
border: 1px solid black;
background-color: #fbb34c;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 10px;
   display: grid;
   grid-template-columns: 2fr 1fr;
    }
`

const RedesSociais = styled.div`
font-size: 12px;
text-align: center;
margin-top: 45px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 12px;
   margin-top: 25%;
    }
`

const ImgLink = styled.a`
text-align: center;
font-size: 12px;
padding: 10px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 12px;
   margin-top: 8%;
   display: block;
    }
`

const TextoEquipe = styled.p`
margin-bottom: 2%;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   margin-bottom: 2%;
}
`

const Imagem = styled.a`
margin: 4px;
margin-top: 5px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   margin: 1%;
}
`

export default class HeaderEFooter extends React.Component {


  render() {
    return (


      <div>

        <Footer>

          <ImgLink>
            <TextoEquipe> --- Equipe de desenvolvimento --- </TextoEquipe>
            <Imagem href="https://www.linkedin.com/in/peterson-santana-maia-5291bb215/" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
            <Imagem href="https://www.linkedin.com/in/carolina-fortuna/" target="_blank"><img width='40px' src='https://media-exp2.licdn.com/dms/image/C4E03AQFaJHA6_2fu8A/profile-displayphoto-shrink_200_200/0/1579930268738?e=1662595200&v=beta&t=CVSW-ZFWVZFtMrNrYVU_sSxLcur6vSKPa-C8mbfrS90' alt="" /></Imagem>
            <Imagem href="https://www.linkedin.com/in/pablo-leao/" target="_blank"><img width='40px' src='https://media-exp2.licdn.com/dms/image/C5603AQHoRy_hhnD87A/profile-displayphoto-shrink_200_200/0/1621551128951?e=1662595200&v=beta&t=p4ZuY6rfUc0mbURJHcMuNADILuwHH5qXuQhHTFzZ0Qs' alt="" /></Imagem>
            <Imagem href="https://www.linkedin.com/in/joao-gabriel-guimaraes-7aa246191/" target="_blank"><img width='40px' src='https://media-exp2.licdn.com/dms/image/C4D03AQGM1pCncZVg0w/profile-displayphoto-shrink_200_200/0/1651504824858?e=1662595200&v=beta&t=1KVHdBJLDEoGHZSZgiqsOeNZerP0Hs7RrWWyFicL_0o' alt="" /></Imagem>
            <Imagem href="https://www.linkedin.com/in/arlindo-vin%C3%ADcius-amado-nascimento-silva-714079184/" target="_blank"><img width='40px' src='https://media-exp2.licdn.com/dms/image/C4E03AQHqHBoYpFy7Fw/profile-displayphoto-shrink_400_400/0/1656888957972?e=1662595200&v=beta&t=PZ3ACysqBwMMl5K513JJcfVwXCXDIB0XJU3hacp-JpM' alt="" /></Imagem>
          </ImgLink>

          <RedesSociais>
            <p>--- Nossas Redes ---</p>
            <a href="http://www.facebook.com.br"><img width='35px' src={Face} alt="" /></a>
            <a href="http://www.instagram.com.br"><img width='35px' src={Instagram} alt="" /></a>
            <a href="http://www.whatsapp.com"><img width='35px' src={Whatsapp} alt="" /></a>
          </RedesSociais>

        </Footer>

      </div>


    )
  }
}