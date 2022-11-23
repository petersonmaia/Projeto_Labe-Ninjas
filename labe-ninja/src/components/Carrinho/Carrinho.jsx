import React from "react";
import { getAllJobs, removeFromCart } from "../../service/ConexoesApi";
import { BalaoCarrinho, CardCarrinho, TituloCarrinho, FinalCarrinho } from "./styled";
import BotaoFechar from "./BotaoFechar";
import BotaoExcluir from "./BotaoExcluir"
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default class Carrinho extends React.Component {
    state = {
        itensCarrinho: []
    };

    // adicionaItemCarrinho = (id) => {
    //   console.log("Adicionou");
    // };

    excluiItemCarrinho = (id) => {
        if (window.confirm("Tem certeza que deseja remover esse item?")) {
            removeFromCart(id).then(() => {
                getAllJobs().then((result) => {
                    const itensAdicionados = result.filter((item) => {
                        return item.taken
                    })
                    this.setState({ itensCarrinho: itensAdicionados });
                    this.props.carrinhoExcluiu();

                });
            });
        }
    };

    esvaziarCarrinho = () => {
        if (window.confirm("Deseja mesmo excluir todos os itens?")) {
            for (let item of this.state.itensCarrinho) {
                removeFromCart(item.id).then((result) => {
                    this.setState({ itensCarrinho: [] });
                    this.props.carrinhoExcluiu();
                    this.props.esvaziaCarrinho();
                })
            }
        }
    };

    contratarServico = () => {
        for (let item of this.state.itensCarrinho) {
            removeFromCart(item.id).then((result) => {
                this.setState({ itensCarrinho: [] });
                this.props.carrinhoExcluiu();
            })
        }
        // this.props.carrinhoExcluiu();
        alert("Agradecemos a preferência! Em breve entraremos em contato!");
    };

    componentDidMount() {
        getAllJobs().then((result) => {
            const itensAdicionados = result.filter((item) => {
                return item.taken
            })
            this.setState({ itensCarrinho: itensAdicionados });
        });
    }

    componentDidUpdate() {
        if (this.props.atualizaComponente) {
            getAllJobs().then((result) => {
                const itensAdicionados = result.filter((item) => {
                    return item.taken
                })
                this.setState({ itensCarrinho: itensAdicionados });
                this.props.concluido()

            })
        }
    }

    render() {
        let itensExibidos = "";
        if (this.state.itensCarrinho.length !== 0) {
            itensExibidos = this.state.itensCarrinho
                .map((item) => {
                    return (
                        <CardCarrinho key={item.id}>
                            <div>
                                <span>{item.title}</span>
                                <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
                            </div>
                            <BotaoExcluir excluiItem={() => this.excluiItemCarrinho(item.id)} />
                        </CardCarrinho>
                    );
                });
        } else {
            itensExibidos = <h2>{"Carrinho vazio :("}</h2>;
        }

        let valorTotal = 0;

        if (this.state.itensCarrinho) {
            for (let item of this.state.itensCarrinho) {
                valorTotal += item.price;
            }
        }

        return (
            <BalaoCarrinho mostrar={this.props.mostrar}>
                <TituloCarrinho>
                    <span>Meu Carrinho</span>
                    <BotaoFechar fechouCarrinho={this.props.fechar} />
                </TituloCarrinho>

                {itensExibidos}
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
                    startIcon={<DeleteIcon />}
                    onClick={this.esvaziarCarrinho}
                    disabled={this.state.itensCarrinho.length === 0}
                >
                    Esvaziar Carrinho
                </Button>
                <FinalCarrinho>
                    <h3>Total: R$ {valorTotal.toFixed(2).replace(".", ",")}</h3>
                    <Button
                        variant="contained"
                        onClick={this.contratarServico}
                        disabled={this.state.itensCarrinho.length === 0}
                        sx={{
                            backgroundColor: '#d86c01',
                            '&:hover': {
                                backgroundColor: '#ab5500'
                            }
                        }}
                    >
                        Contratar
                    </Button>
                    {/* <button
            onClick={this.contratarServico}
            disabled={this.state.itensCarrinho.length === 0}
          >
            Contratar
          </button> */}
                </FinalCarrinho>
            </BalaoCarrinho>
        );
    }
}