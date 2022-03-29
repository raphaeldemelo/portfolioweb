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
                <Card>
                    <CardConteudo style={{ backgroundColor: 'red' }}>
                        <Titulo>Raphael de Melo</Titulo>
                    </CardConteudo>

                    <CardConteudo style={{ backgroundColor: 'blue' }}>
                    <Titulo>Beatriz Andrade</Titulo>
                    </CardConteudo >
                    {/* <CardConteudo>
                        <Apresentacao />
                    </CardConteudo>

                    <CardConteudo style={{ backgroundColor: 'red', paddingLeft: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Slide top>
                            <Imagem
                                src={FotoPerfil}
                            />
                        </Slide>
                    </CardConteudo> */}
                </Card>
            </Conteudo>

            <Footer />
        </Container >
    );
}