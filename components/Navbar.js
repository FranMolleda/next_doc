import React from "react";
/* import { NavbarWrapper } from "./styles/NavbarStyles"; */
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #d2d2d2;
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;

function Navbar({ open, categorias }) {
  console.log(categorias);
  return (
    <NavbarWrapper open={open}>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.children.length > 0 ? (
              <div>
                {categoria.children.map((children) => (
                  <li key={children.id}>{children.name}</li>
                ))}
              </div>
            ) : null}
            {categoria.slug}
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
