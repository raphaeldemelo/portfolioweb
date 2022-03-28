import React from 'react';
import {
    Container,
    Conteudo,
    Card,
    CardConteudo,
    Imagem,
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

            <Conteudo style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <Card>
                    <CardConteudo>
                        <Apresentacao />
                    </CardConteudo>

                    <CardConteudo style={{ paddingLeft: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Slide top>
                            <Imagem
                                src={FotoPerfil}
                            />
                        </Slide>
                    </CardConteudo>
                </Card>
            </Conteudo>

            <Conteudo>

            </Conteudo>

            <Footer />
        </Container >
    );
}