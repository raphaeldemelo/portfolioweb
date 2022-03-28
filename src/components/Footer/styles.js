import styled from 'styled-components';

export const Container = styled.div`
background-color: #1d1d24;
justify-content: center;
width: 100%;
display: flex;
postition: absolute;
bottom:0;

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
color: #ddd;
font-size: 15px;
font-weight: 100;

@media screen and (max-width: 600px){
font-size: 13px;
font-weight: 100;
justify-content: center;
align-items: center;
display: flex;
}
`;

export const TextoCriador = styled.h3`
font-size: 15px;
font-weight: 300;
color: #fff;
margin-left: 50px;
display: inline-block;
position: relative;


:hover::after{
content: '';
position: absolute;
width: 100%;
transform: scaleX(0);
height:2px;
bottom:-2px;
left: 0;
background-color: red;
transform-origin: bottom right;
transition: transform 0.5s ease-out;
}

:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
}

@media screen and (max-width: 600px){
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    :hover{
    transform: scale(1.0) ;
    }
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

export const ConteudoFooter = styled.div`
background-color: #1d1d24;
height: 126px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 30%;

@media screen and (max-width: 600px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`;