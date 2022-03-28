import React from 'react';
import {
  Container,
  Conteudo,
  Texto,
  Botao,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Conteudo>
        <Botao>
          <Texto>Início</Texto>
        </Botao>

        <Botao>
          <Texto>Meus Projetos</Texto>
        </Botao>

        <Botao>
          <Texto>Contato</Texto>
        </Botao>

      </Conteudo>
    </Container>
  );
}