import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './styles';

export default function Header({ setMenuIsVisible }) {
  return (
    <>
      <Nav>
        <Bars onClick={() => setMenuIsVisible(true)} />


        <NavMenu>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavLink to='/' activeStyle>
              Apresentação
            </NavLink>
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavLink to='/projetos' activeStyle>
              Projetos
            </NavLink>
          </Link>
        </NavMenu>

      </Nav>

    </>
  );
}