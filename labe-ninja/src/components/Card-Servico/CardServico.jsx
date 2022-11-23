import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import Filter from "../Filter/Filter";
import { Card } from "./styled";
import { CardContainer, Div } from "./styled";
import { getAllJobs } from "../../service/ConexoesApi";
import { addToCart } from "../../service/ConexoesApi";
import { removeFromCart } from "../../service/ConexoesApi";


export default class CardServico extends React.Component {
  state = {
    servicos: [],
    minValue: "",
    maxValue: "",
    searchProd: "",
    order: "Título",
    idDetalhe: ''
  };

    componentDidMount = () => {
    getAllJobs().then((result) => {
        this.setState({servicos: result})
        });
    };
  
    adicionarAoCarrinho = (id) => {
      addToCart(id).then(() => {
        getAllJobs().then((result) => {
          this.setState({servicos: result})
        })
        this.props.cardAdicionou() // Esse props aqui que também ajuda na mudança
      })
        
    }

  onChangeMinValue = (e) => {
    this.setState({ minValue: e.target.value });
  };
  onChangeMaxValue = (e) => {
    this.setState({ maxValue: e.target.value });
  };
  onChangeSearchProd = (e) => {
    this.setState({ searchProd: e.target.value });
  };
  onChangeOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  removerDoCarrinho = (id) => {
    removeFromCart(id);
  };

  // Essa parte do código mais a passagem de outro props fazem o 
  // cardServico atualizar quando o carrinho remove um serviço
  componentDidUpdate() {
    if (this.props.atualizaComponente) {
      getAllJobs().then((result) => {
          this.setState({servicos: result})
          this.props.concluido()
        })
    }
  }

  // passaIDDetalhe = (id) => {
  //   this.setState({idDetalhe: id})
  //}

  render() {
    
    const filteredJobs = this.state.servicos
      .filter((job) => {
        let minVal = this.state.minValue ? this.state.minValue : -Infinity;
        let maxVal = this.state.maxValue ? this.state.maxValue : Infinity;
        let search = this.state.searchProd.toLowerCase();
        let title = job.title.toLowerCase();
        return (
          job.price >= minVal && job.price <= maxVal && title.includes(search)
        );
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Título":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
          case "Decrescente":
            return b.price - a.price;
          case "Crescente":
            return a.price - b.price;
          default:
            return a.price - b.price;
        }
      });

    const servicos = filteredJobs.map((servico) => {
      let today = new Date(servico.dueDate);
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;

      return (
        <Card key={servico.id}>
          <p>{servico.title}</p>
          <p>
            Prazo: {today}, Preço: R${servico.price}
          </p>
          <div>
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
             
            onClick={() => this.props.botaoDetalhe(servico.id)}>
              Detalhes
            </Button>
            <IconButton 
                      sx={{
                        border: '1px',
                        border: '1px solid',
                        borderColor: '#fbb34c',              
                        width: 'fit-content',
                        color: '#fbb34c',
                        marginTop: '10px',
                        marginBottom: '10px',
                        '&:hover': {
                          borderColor: '#d86c01',
                          color: 'black',
                          backgroundColor: '#fbb34c'
                        }
                      }}
              
              onClick={() => {
                this.adicionarAoCarrinho(servico.id);
              }}
              disabled={servico.taken}
            >
              <AddShoppingCartIcon/>
            </IconButton>
          </div>
        </Card>
      );
    });
    return (
      <Div>
          <Filter
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          searchProd={this.state.searchProd}
          order={this.state.order}
          onChangeMinValue={this.onChangeMinValue}
          onChangeMaxValue={this.onChangeMaxValue}
          onChangeSearchProd={this.onChangeSearchProd}
          onChangeOrder={this.onChangeOrder}
        />
        
        <CardContainer>{servicos}</CardContainer>
      </Div>
    );
  }
}