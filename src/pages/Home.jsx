import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faShoppingCart, faPenNib, faFolder } from '@fortawesome/free-solid-svg-icons';
import MyImage from '../assets/home-svg.svg';
import ServiceImage1 from '../assets/service1.jpeg';
import ServiceImage2 from '../assets/service2.jpeg';
import ServiceImage3 from '../assets/service3.jpeg';

const HomeContainer = styled.main`
  background: linear-gradient(90deg, rgba(91,52,224,1) 0%, rgba(52,124,224,1) 100%);
  padding: 50px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  text-align: center;
  height: 70vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  margin-left: 10px;

  button{
    border-radius: 8%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  height: 60%;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    max-width: 350px;
    height: 100%;
  }
`;

const MainHeading = styled.h1`
  margin: 0 0 20px 0;
  font-size: 4.5em;
  color: white;
`;

const MainText = styled.p`
  margin: 0 0 30px 0;
  font-size: 1.2em;
  color: white;
`;

const Button = styled.button`
  background: #ffc107;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #e0a800;
  }
`;

const ServicesSection = styled.section`
  padding: 50px 20px;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#f8f9fa' : '#555')};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 3em;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const ServiceDescription = styled.p`
  margin: 0;
`;

const ServiceImage = styled.img`
  width: 80%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Home = ({ theme }) => {
  return (
    <>
      <NavBar theme={theme} />
      <HomeContainer theme={theme}>
        <TextContainer>
          <MainHeading>Your Idea Matters!</MainHeading>
          <MainText>Pulvinar enim ac tortor nulla facilisi tristique facilisi elementum sollicitudin eget lorem.</MainText>
          <Button>Make a Website</Button>
        </TextContainer>
        <ImageContainer>
          <img src={MyImage} alt="Description of the image" />
        </ImageContainer>
      </HomeContainer>
      <ServicesSection theme={theme}>
        <h2>Our Services</h2>
        <ServicesGrid>
          <ServiceCard theme={theme}>
            <ServiceIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </ServiceIcon>
            <ServiceTitle>Local Business</ServiceTitle>
            <ServiceDescription>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</ServiceDescription>
          </ServiceCard>
          <ServiceCard theme={theme}>
            <ServiceIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </ServiceIcon>
            <ServiceTitle>Online Store</ServiceTitle>
            <ServiceDescription>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</ServiceDescription>
          </ServiceCard>
          <ServiceCard theme={theme}>
            <ServiceIcon>
              <FontAwesomeIcon icon={faPenNib} />
            </ServiceIcon>
            <ServiceTitle>Blogging</ServiceTitle>
            <ServiceDescription>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</ServiceDescription>
          </ServiceCard>
          <ServiceCard theme={theme}>
            <ServiceIcon>
              <FontAwesomeIcon icon={faFolder} />
            </ServiceIcon>
            <ServiceTitle>Portfolio</ServiceTitle>
            <ServiceDescription>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
      <ServicesSection theme={theme}>
        <h2>Additional Services</h2>
        <ServicesGrid>
          <ServiceCard theme={theme}>
            <ServiceImage src={ServiceImage1} alt="Service 1" />
            <ServiceTitle>Service 1</ServiceTitle>
          </ServiceCard>
          <ServiceCard theme={theme}>
            <ServiceImage src={ServiceImage2} alt="Service 2" />
            <ServiceTitle>Service 2</ServiceTitle>
          </ServiceCard>
          <ServiceCard theme={theme}>
            <ServiceImage src={ServiceImage3} alt="Service 3" />
            <ServiceTitle>Service 3</ServiceTitle>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    </>
  );
};

export default Home;
