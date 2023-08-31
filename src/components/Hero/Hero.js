import React from 'react'
import { Link } from 'react-router-dom'
import { HeroButton, HeroSection, HeroVideo, HeroText, ButtonWrapper } from './HeroStyles'
import { Button, Container, MainHeading } from '../../globalStyles'

const Hero = () => {
  return (
    <HeroSection>
    <HeroVideo src='./assets/hero.mp4' autoPlay muted />
      <Container>
        <MainHeading>Your data is secure</MainHeading>
        <HeroText>
            We provide the best security systems for clients all over the globe
        </HeroText>

        <ButtonWrapper>
            <Link to="signup" >
              <Button>Get Started</Button>
            </Link>
            <HeroButton>Find more</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
