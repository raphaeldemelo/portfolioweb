import React, { useState } from 'react';
import {
  Container,
  Conteudo,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuMobile from '../../components/MenuMobile';

export default function Projetos() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Conteudo>

        </Conteudo>
        <Footer />
      </Container>
    </>
  );
}