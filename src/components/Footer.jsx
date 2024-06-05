import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#181818')};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  padding: 20px;
  text-align: center;
  margin-top: 10px;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin: 10px 0;

  a {
    color: ${({ theme }) => (theme === 'light' ? '#1a0dab' : '#8ab4f8')};
    text-decoration: none;
    margin: 5px 0;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;

  a {
    color: ${({ theme }) => (theme === 'light' ? '#1a0dab' : '#8ab4f8')};
    margin: 0 10px;
    font-size: 1.5em;

    &:hover {
      color: ${({ theme }) => (theme === 'light' ? '#c70039' : '#c70039')};
    }
  }

  @media (max-width: 480px) {
    a {
      margin: 0 5px;
      font-size: 1.2em;
    }
  }
`;

const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <FooterLinks theme={theme}>
        <div>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Hosting</a>
          <a href="#">Privacy</a>
        </div>
        <div>
          <a href="#">Showcase</a>
          <a href="#">Themes</a>
          <a href="#">Plugins</a>
          <a href="#">Patterns</a>
        </div>
        <div>
          <a href="#">Learn</a>
          <a href="#">Documentation</a>
          <a href="#">Developers</a>
          <a href="#">WordPress.tv</a>
        </div>
        <div>
          <a href="#">Get Involved</a>
          <a href="#">Events</a>
          <a href="#">Donate</a>
          <a href="#">Swag Store</a>
        </div>
        <div>
          <a href="#">WordPress.com</a>
          <a href="#">Matt</a>
          <a href="#">bbPress</a>
          <a href="#">BuddyPress</a>
        </div>
      </FooterLinks>
      <SocialLinks theme={theme}>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </SocialLinks>
      <p>Made By Shivam Rajput</p>
    </FooterContainer>
  );
};

export default Footer;
