import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
margin: 0 auto;
`;


export const Main = styled.div`
display: block;
margin: 0;
`;

export const Parallax = styled.section`
padding: 40px 0;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh !important;
width: 100%;
position: relative;
overflow: hidden;
background-position: 50% 50%;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;

:after {
content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  background: -moz-linear-gradient(to top, rgba(0,0,0,0) 0, rgba(0,0,0,0) 45%, #000 100% );
  background: -webkit-linear-gradient(to top, rgba(0,0,0,0) 0, rgba(0,0,0,0) 45%, #000 100% );
  background: linear-gradient(to top, rgba(0,0,0,0) 0, rgba(0,0,0,0) 45%, #000 100% );
}
`;

export const Titulo = styled.h1`
color: #Fff;
font-size: 50px;
`;

export const Conteudo = styled.section`
width: 100%;
max-width: 720px;
margin: 0 auto;
padding: 0 20px;
z-index: 99;
`;

export const Subtitulo = styled.h2`
color: #fff;
font-size: 30px;
margin-bottom: 40px;
z-index: 99;
`;

export const Texto = styled.p`
color: #fff;
margin-bottom: 40px;
z-index: 99;

p:last-child{
    margin-bottom: 0;
}
`;

export const Imagem = styled.image`
background-image: url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
width: 100%;
height: 100%;
background-position: 50% 50%;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
display: flex;
justify-content: center;
align-items: center;



:after {
content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 60%, #000 100% );
  background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 60%, #000 100% );
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 60%, #000 100% );
}
`;

export const Imagem2 = styled.image`
background-image: url("https://cdn.pixabay.com/photo/2020/05/07/04/01/digitization-5140071_960_720.jpg");
width: 100%;
height: 100%;
background-position: 50% 50%;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
display: flex;
justify-content: center;
align-items: center;

:after {
content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );
  background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );
}
`;

