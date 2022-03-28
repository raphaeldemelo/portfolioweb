import styled from 'styled-components';

export const Container = styled.div`
background-color: #1d1d24;
width: 100%;
display: flex;
height: 67px;
align-items: center;
padding: 10px;

@media screen and (max-width: 600px){

}
`;

export const Texto = styled.h3`
color: #fff;
padding: 10px;
`;

export const Conteudo = styled.div`
display: flex;
flex-direction: row;
`;

export const Botao = styled.button`
border: 0;
background-color: #1d1d24;
transition: ease-in 0.2s;
border-radius: 10px;
width: 140px;
height: 45px;
margin-right: 10px;
padding-left: 10px;

:hover{
    background-color: #000;
    transform: scale(1.1) ;
}
`;
