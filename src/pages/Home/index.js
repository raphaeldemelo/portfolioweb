import React from 'react';
import {
    Container,
    Main,
    Parallax,
    Conteudo,
    Titulo,
    Subtitulo,
    Texto,
    Imagem,
    Imagem2,
} from './styles';
import { Slide, Zoom } from 'react-reveal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Home() {
    return (
        <Container>
            <Header/>
            <Main>
                <Parallax style={{ backgroundColor: '#292929' }}>
                    <Imagem>
                        <Slide top>
                            <Titulo style={{ fontWeight: 'lighter' }}>Oi, eu sou Raphael</Titulo>
                        </Slide>
                        <Slide bottom>
                            <Titulo style={{ color: 'red' }}>Desenvolvedor Front-end</Titulo>
                        </Slide>
                    </Imagem>
                </Parallax>

                <Parallax>
                    <Conteudo>
                        <Slide left>
                            <Subtitulo>Qualquer texto aqui...</Subtitulo>
                        </Slide>

                        <Zoom>
                            <Texto>
                                is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </Texto>
                        </Zoom>

                        <Zoom>
                            <Texto>
                                is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </Texto>
                        </Zoom>
                    </Conteudo>
                </Parallax>

                <Parallax>
                    <Imagem2>
                        <Slide duration="2000" left>
                            <Titulo>TESTANDO ALGO AQUI</Titulo>
                        </Slide>
                    </Imagem2>
                </Parallax>
            </Main>
            <Footer />
        </Container >
    );
}