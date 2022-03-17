import React from 'react';
import {
    Container,
    Main,
    Parallax1,
    Parallax,
    Conteudo,
    Titulo,
    Subtitulo,
    Texto,
    Imagem,
    Imagem2,
} from './styles';

export default function Home() {
    return (
        <Container>
            <Main>
                <Parallax style={{ backgroundColor: '#292929' }}>
                    <Imagem>
                        <Titulo>Raphael de Melo</Titulo>
                    </Imagem>
                </Parallax>

                <Parallax>
                    <Conteudo>
                        <Subtitulo>Qualquer texto aqui...</Subtitulo>
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
                    </Conteudo>
                </Parallax>

                <Parallax>
                    <Imagem2>
                        <Titulo>TESTANDO ALGO AQUI</Titulo>
                    </Imagem2>
                </Parallax>
            </Main>
        </Container >
    );
}