import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Conteudo,
    Texto,
    Botao,
    Imagem,
} from './styles';
import foto from '../../assets/fotovazia.png';

export default function PaginaErro() {
    return (
        <Container>
            <Conteudo>
                <Texto>hmm, essa página não existe</Texto>

                <Imagem
                    src={foto}
                />

                <Botao>
                    <Link to='/'>
                        Voltar para Home
                    </Link>
                </Botao>
            </Conteudo>

        </Container>
    );
}