import React from 'react'
import HeroSection from '../Components/HeroSection'
import styled from 'styled-components'


const HomeStyled = styled.div`

`

function Home() {
    return (
        <HomeStyled>
            <HeroSection></HeroSection>

            {/* content to be remove -> made into components */}
            <div className="content">
                <div className="our-menu">
                    <div className="img-container">
                        <img className="menu-img" src="/images/gudeg-topView.jpg"></img>
                    </div>
                </div>
            </div>
        </HomeStyled>
    )
}

export default Home
