import React from 'react';
import {
  Container,
  Conteudo,
  Botao,
  Texto,
  TextoCriador,
  ConteudoFooter,
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

      <ConteudoFooter>
        <Texto>
          Portfólio de
        </Texto>
        <TextoCriador>@Raphaeldemelo</TextoCriador>
      </ConteudoFooter>


    </Container>
  );
}