import React from 'react';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();

  function handleCadastrarCliente(event){
    history.push('/forms/cliente');
  }

  function handleCadastrarProduto(event){
    history.push('/forms/produto');
  }


  return (
    <S.HomeContainer>
      <S.DivTitle>
        <S.Title>Este é um sistema de cadastro para e-commerce.<br/> Comece a usar! É simples como parece!</S.Title>
      </S.DivTitle>
      <S.DivContent>
        <S.Button cliente type="button" onClick={handleCadastrarCliente}>Cadastrar Cliente</S.Button>
        <S.Button produto type="button" onClick={handleCadastrarProduto}>Cadastrar Produto</S.Button>
      </S.DivContent>
    </S.HomeContainer>
  );
}

export default App;
