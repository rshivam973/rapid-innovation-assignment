import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Toggle from './Toggle';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${({ theme }) => (theme === 'light' ? '#f8f9fa' : '#222')};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  z-index: 50;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    z-index: 50;
    position: absolute;
    top: 30px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: left 0.3s ease-in-out;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 760px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1em;

  @media (max-width: 760px) {
    margin-top: 20px;
  }
`;

const HamburgerButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5em;
  display: block;

  @media (min-width: 761px) {
    display: none;
  }
`;

const NavBar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HamburgerButton onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerButton>
      <NavBarContainer theme={theme} isOpen={isOpen}>
        <div>ASTRA</div>
        <NavLinks>
          <NavLink theme={theme} href="/">
            Home
          </NavLink>
          <NavLink theme={theme} href="#">
            Services
          </NavLink>
          <NavLink theme={theme} href="#">
            About
          </NavLink>
          <NavLink theme={theme} href="#">
            Reviews
          </NavLink>
          <NavLink theme={theme} href="#">
            Why Us
          </NavLink>
          <NavLink theme={theme} href="/contact-us">
            Contact
          </NavLink>
          <NavLink theme={theme} href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
          <NavLink theme={theme} href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </NavLink>
          <NavLink theme={theme} href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </NavLink>
        </NavLinks>
        <div>
            <Toggle />
        </div>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
