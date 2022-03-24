import styled from 'styled-components';

export const Container = styled.div`
background-color: #1d1d24;
justify-content: center;
width: 100%;
display: flex;

@media screen and (max-width: 600px){
flex-direction: column;
padding: 10px;
height: 100px;
}
`;

export const Conteudo = styled.div`
background-color: #1d1d24;
height: 126px;
display: flex;
align-items: center;
justify-content: space-around;
width: 30%;

@media screen and (max-width: 600px){
    height: 100px;
    width: 100%;
}
`;

export const Texto = styled.h3`
color: #fff;
font-size: 15px;
font-weight: 100;

@media screen and (max-width: 600px){
font-size: 10px;
font-weight: 100;
}
`;

export const Botao = styled.button`
border: 0;
background-color: #1d1d24;
transition: ease-in 0.2s;
border-radius: 50%;
width: 50px;
height: 50px;

:hover{
    background-color: #000;
    transform: scale(1.2) ;
}
`;