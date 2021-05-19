import React from 'react'
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <img className="hero-img" src="/images/gudeg-hero.jpg" />
            <div className="hero-content">
                <Button> Contact Us </Button>
            </div>
        </div>
    )
}

export default HeroSection
