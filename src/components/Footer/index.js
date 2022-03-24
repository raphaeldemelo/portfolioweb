import React from 'react';
import {
  Container,
  Conteudo,
  Botao,
  Texto,
} from './styles';
import { FiInstagram, FiLinkedin, FiFacebook, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <Container>


      <Conteudo>
        <Botao>
          <a href="https://www.linkedin.com/in/raphaeldemelo/">
            <FiLinkedin size={30} color='#ddd' />
          </a>
        </Botao>
        <Botao>
          <a href="https://www.facebook.com/raphaeldemelos/">
            <FiFacebook size={30} color='#ddd' />
          </a>
        </Botao>
        <Botao>
          <a href="https://www.instagram.com/raphaeldemelo_/">
            <FiInstagram size={30} color='#ddd' />
          </a>
        </Botao>
        <Botao>
          <a href="https://github.com/raphaeldemelo">
            <FiGithub size={30} color='#ddd' />
          </a>
        </Botao>
      </Conteudo>

      <Conteudo>
        <Texto>Portfólio de @Raphaeldemelo</Texto>
      </Conteudo>


    </Container>
  );
}