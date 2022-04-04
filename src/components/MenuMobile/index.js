import React, { useState } from 'react';
import {
  Container,
  Nav,
} from './styles';
import { IoIosClose } from 'react-icons/io';


export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {


  return (
    <Container isVisible={menuIsVisible}>
      <IoIosClose
        size={30}
        color='#fff'
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        onClick={() => setMenuIsVisible(false)}
      />

      <Nav>
        <a href='/'>Início</a>
        <a href='/projetos'>Projetos</a>
      </Nav>
    </Container>
  );
}