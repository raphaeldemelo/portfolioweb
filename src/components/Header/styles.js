import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
//codigo do video --------------------------------------------------------------------

export const Nav = styled.nav`
background: #1d1d24;
height: 80px;
display: flex;
justify-content: center;
padding: 10px;
z-index: 10;
width: 100%;
`

export const NavLink = styled(Link)`
color: #e0e0e0;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    color: #fff;
    transform: scale(1.2) ;
}

:after{
content: " ";
position: fixed;
width: 100%;
height:2px;
bottom:-20px;
left: 0;
background-color: red;
transform-origin: bottom left;
transition: transform 0.15s ease-out;
}

:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
}

`

export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 75%);
font-size: 1.8rem;
cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavButton = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavButtonLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 30px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:  #fff;
    color: #010606;,
}
`











































// meu codigo---------------------------------------------------------------------------
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
color: #ddd;
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






