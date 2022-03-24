import React from 'react';
import {
  Container,
  Conteudo,
  Texto,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Conteudo>
        <Texto>Início</Texto>

        <Texto>Meus Projetos</Texto>

        <Texto>Contato</Texto>

      </Conteudo>
    </Container>
  );
}