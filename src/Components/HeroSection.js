import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const HeroSectionStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-image: url('/images/gudeg-hero.jpg'); */
    h2{
    margin: 0;
    }
    .hero-content{
    margin: 0 auto;
    }
    .hero-img{
    position: absolute;
    object-fit: cover;
    size: 100%;
    width: 100%;
    height: 100vh;
    z-index: -999;
    /* opacity: 0.8; */
    filter: brightness(80%) contrast(120%) ;
    }
`

function HeroSection() {
    return (
        <HeroSectionStyled>
            <img className="hero-img" src="/images/gudeg-hero.jpg" />
            <div className="hero-content">
                <Button> Contact Us </Button>
            </div>
        </HeroSectionStyled>
    )
}

export default HeroSection
