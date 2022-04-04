import React, { useState } from 'react';
import {
    Container,
    Conteudo,
    Card,
    CardConteudo,
    Imagem,
    Titulo,
} from './styles';
import { Slide, Zoom } from 'react-reveal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Apresentacao from '../../components/Apresentacao';
import FotoPerfil from '../../assets/FotoPerfil.jpg';
import MenuMobile from '../../components/MenuMobile';

export default function Home() {

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
                    <CardConteudo>
                        <Card>
                            <Imagem src={FotoPerfil} alt='foto perfil' />
                        </Card>
                        <Card>
                            <Titulo style={{ marginLeft: 10 }}>Raphael de Melo</Titulo>
                        </Card>
                    </CardConteudo>
                </Conteudo>

                <Footer />
            </Container >
        </>
    );
}