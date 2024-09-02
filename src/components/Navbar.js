import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../Assets/logo.jpg';

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 5px 0;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 1s ease;
  }

  &:hover {
    color: red;
    font-weight: bold;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  z-index: 10;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImg = styled.img`
  height: 2.5rem;
  width: auto;
`;

const MenuButton = styled.button`
  display: none;
  color: white;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #000;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Header >
      <LogoContainer>
        <LogoImg src={logo} alt="DesignGX Logo" />
        <span className="text-xl font-semibold">DesignGX</span>
      </LogoContainer>
      <div className="flex items-center gap-4">
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavList isOpen={isOpen}>
          <NavLink to="Service" smooth={true} duration={800}>
            Services
          </NavLink>
          <NavLink to="Team" smooth={true} duration={800}>
            Team
          </NavLink>
          <NavLink to="Contact" smooth={true} duration={800}>
            Contact Us
          </NavLink>
        </NavList>
      </div>
    </Header>
  );
};

export default Nav;
