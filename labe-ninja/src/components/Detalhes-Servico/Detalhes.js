import React from "react";
import axios from 'axios';
import styled from "styled-components";
import { Detalhei } from "./styled";
import { Button } from "@mui/material";

const ItemLista = styled.li`
    width: fit-content;
`

export default class Detalhes extends React.Component{
    state = {
        servico: {}
    };

    getJobById = (id) =>{
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
        const auth = {
            headers: {
                Authorization: "2d0b7f1b-74aa-42c3-8a4b-c6e3484a4904"
            }};
        axios
        .get(url, auth)
        .then((res) => {
            this.setState({servico: res.data})
            console.log(res.data)
        })
        .catch((error) => alert(error.response))
    };

    componentDidMount(){
        this.getJobById(this.props.id);
    };
    

 
    render(){
        let renderizaPgto = ""
        if (this.state.servico.paymentMethods) {
            renderizaPgto = this.state.servico.paymentMethods.map((item)=>{
                return <ItemLista>{item}</ItemLista>
            })
        } else {
            renderizaPgto = "Carregando..."
        };
        let today = new Date(this.state.servico.dueDate);
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;
        
        return(
            <Detalhei>
                <h2>{this.state.servico.title}</h2>
                <h4>{this.state.servico.description}</h4>
                <p>Preço: R${this.state.servico.price},00</p>
                <p>
                    Pagamento:
                    <div>
                        {renderizaPgto}
                    </div>   
                </p>
                <p>Até {today} </p>
                
                <Button
              sx={{
                width: 'fit-content',
                border: '1px solid',
                borderColor: '#fbb34c',
                color: '#fbb34c',
                marginTop: '10px',
                marginBottom: '10px',
                '&:hover': {
                  borderColor: '#d86c01',
                  color: '#d86c01',
                  backgroundColor: '#fbb34c'
                }
        }}
             
                onClick={this.props.botaoVoltar}>
              Voltar
            </Button>
            </Detalhei>

        )
    }
}