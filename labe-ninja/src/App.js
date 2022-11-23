import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho/Carrinho";
import CardServico from "./components/Card-Servico/CardServico";
import Inscricao from "./components/Formulario/Inscricao";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detalhes from "./components/Detalhes-Servico/Detalhes";

const Container = styled.div`
  max-height: 100vh;
`

const Corpo = styled.div`
  min-height: 81vh;
`

export default class App extends React.Component {

    state = {
        carrinhoVisivel: false,
        atualizaComponente: false,
        telaAtual: 'home',
        idServico: '',
        itensNoCarrinho: 0
    };

    esvaziaCarrinho = () => {
      this.setState({itensNoCarrinho: 0})
    }
    irParaHome = () => {
        this.setState({telaAtual: 'home'})
    }
    irParaDatalhes = (id) => {
        this.setState({telaAtual: 'detalhes', idServico: id})
    }

    irParaFormulario = () => {
        this.setState({telaAtual: 'inscricao'})
    }
    irParaServicos = () => {
        this.setState({telaAtual: 'servicos', idServico: ''})
    }
    exibeCarrinho = () => {
        this.setState({ carrinhoVisivel: !this.state.carrinhoVisivel });
    };
    atualizaCard = () => {
        this.setState({ atualizaComponente: true })
        this.setState({ itensNoCarrinho: this.state.itensNoCarrinho - 1 })
    }
    atualizaCarrinho = () => {
        this.setState({ atualizaComponente: true })
        this.setState({ itensNoCarrinho: this.state.itensNoCarrinho + 1 })
    }
    concluido = () => {
        this.setState({ atualizaComponente: false })
    }

    render() {
      let telaExibida = ''
      switch(this.state.telaAtual){
        
        case 'inscricao':
            telaExibida = <div>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              esvaziaCarrinho={this.esvaziaCarrinho}
              />
              <Corpo>
                <Inscricao voltarHome={this.irParaHome}/>
              </Corpo>
              <Footer/>
            </div>;
            break;

        case 'servicos':
            telaExibida = <div>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              esvaziaCarrinho={this.esvaziaCarrinho}
              />
              <Corpo>
                <CardServico botaoDetalhe={this.irParaDatalhes}
              cardAdicionou={this.atualizaCarrinho} 
              atualizaComponente={this.state.atualizaComponente} 
              concluido={this.concluido}
              />
              </Corpo> 
            <Footer/>
            </div>;
            break;

        case 'detalhes':
            telaExibida = <Container>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              esvaziaCarrinho={this.esvaziaCarrinho}
              />
              <Corpo>
                <Detalhes  id={this.state.idServico}  botaoVoltar = {this.irParaServicos}/>
              </Corpo>
              <Footer/>
            </Container>;
            break;
        case 'home':
            telaExibida = <Home botaoContratarNinja={this.irParaServicos} botaoSerUmNinja={this.irParaFormulario} />
            break;
        default:
            telaExibida = <Home botaoContratarNinja={this.irParaServicos} botaoSerUmNinja={this.irParaFormulario} />
            break;
    }
        return (
            <div>    
                {telaExibida} 
            </div>
        )
    }

}
