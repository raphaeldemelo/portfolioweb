import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
flex-direction: column;

`;

export const Conteudo = styled.div`
background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
background-repeat: no-repeat;
background-size: cover;
align-items: center;
justify-content: center;
height: 100vh;
display: flex;
flex-direction: row;


`;

export const Card = styled.div`
background-color: rgba(37, 37, 37, 0.8);
width: 90%;
height: 80%;
border-radius: 10px;
display: flex;
flex-direction: column;


`;

export const CardConteudo = styled.div`

display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

@media screen and (max-width:768px){
width: 100%;
}

`;

export const Imagem = styled.img`
width: 200px;
height: 200px;
border: 10px solid white;


`;

export const Titulo = styled.h1`
color: #fff;
`;