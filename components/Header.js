import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  margin-top: -1.25rem;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({ categorias }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <h2>Logo</h2>
      <Navbar categorias={categorias} open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
