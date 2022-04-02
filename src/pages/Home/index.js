import React from 'react';
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

export default function Home() {
    return (
        <Container>
            <Header />

            <Conteudo>
                <CardConteudo>
                    <Card>
                        <Imagem src={FotoPerfil} alt='foto perfil' />
                    </Card>
                    <Card>
                        <Titulo style={{marginLeft: 10}}>Raphael de Melo</Titulo>
                    </Card>
                </CardConteudo>
            </Conteudo>

            <Footer />
        </Container >
    );
}