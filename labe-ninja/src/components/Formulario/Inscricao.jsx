import React from 'react';
import Select from "react-select"
import { createJob } from '../../service/ConexoesApi';  
import { Inscreve } from "./styled";
import './Select.css'
import { Button } from '@mui/material';



export default class Inscricao extends React.Component{
    state = {
        inputTitulo:'',
        inputDescricao: '',
        inputPreco: 0,
        formaPgto: [],
        inputPrazo: '',
    };
    
   
    handleInputTitulo = (event) =>
    this.setState({ inputTitulo: event.target.value });
    
    handleInputDescricao = (event) =>
    this.setState({ inputDescricao: event.target.value });

    handleInputPreco = (event) =>
    this.setState({ inputPreco: event.target.value });

    handleInputPrazo = (event) =>
    this.setState({ inputPrazo: event.target.value });

    
  selectOption = (item) => {
  const novaListaPgto = item.map(item =>{
    return item.value
  })
  this.setState({formaPgto: novaListaPgto})
  console.log(novaListaPgto);
  console.log(this.state.formaPgto)
}


criarNinja = (title, description, price, payment, date) => {
  createJob(title, description, price, payment, date)
  this.setState({ inputTitulo: '' });
  this.setState({ inputDescricao: '' });
  this.setState({ inputPreco: 0 });
  this.setState({ formaPgto: [] });
  this.setState({ inputPrazo: '' });
}


render(){
  console.log(typeof this.state.inputPreco)
  const options = [
    {
      label: "Cartão de Credito", value: "Cartão de Credito"
    },
    {
      label: "Cartão de Debito", value: "Cartão de Débito"
    },
    {
      label: "PayPal", value: "PayPal"
    },
    {
      label: "Boleto", value: "Boleto"
    },
    {
      label: "Pix", value: "Pix"
    }
  ];

    return(
       <Inscreve>
        <h2>Cadastre o seu serviço</h2>
        <input type="text" 
        placeholder='Título' 
        value={this.state.inputTitulo} 
        onChange={this.handleInputTitulo}/>
        <br />
        <input type="text" 
        placeholder='Descrição' 
        value={this.state.inputDescricao} 
        onChange={this.handleInputDescricao}/>
        <br />
        <input type="number" 
        placeholder='Preço' 
        value={this.state.inputPreco}
        onChange={this.handleInputPreco}/>
        <br />
        <input type="date" 
        value={this.state.inputPrazo}
        onChange={this.handleInputPrazo}/>
       
        <br />
       
        <div>
        <Select
          className='select'
          options={options}
          isMulti={true}
          placeholder='Forma de pagamento'      
          onChange={(item) => this.selectOption(item)}
        />
        </div>
         <br />
        
         <Button
              variant="contained"
              sx={{
                backgroundColor: '#d86c01',
                '&:hover': {
                  backgroundColor: '#ab5500'
                }        }}
             
               onClick={() => this.criarNinja(this.state.inputTitulo, this.state.inputDescricao, this.state.inputPreco, this.state.formaPgto, this.state.inputPrazo)}>
              Cadastrar Serviço
          </Button>
        <br />
        <Button
        sx={{
          width: 'fit-content',
          color: '#fbb34c',
          borderColor: '#fbb34c',
          marginTop: '10px',
          marginBottom: '10px',
          '&:hover': {
            borderColor: '#d86c01',
            color: '#d86c01',
            backgroundColor: 'white'
          }
        }}
        variant="outlined"              
        onClick={this.props.voltarHome}>
              Voltar
            </Button>
        
        <button onClick={this.props.voltarHome}>
          
        </button>
      
        </Inscreve>
        

    )
}
} 