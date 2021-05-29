import React from 'react'
import styled from 'styled-components'
import ContactUs from './Footer-Components/ContactUs'

const FooterStyled = styled.div`
    background-color: #333333;
    color: white;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 200px;
    /* min-height: 200px; */
    bottom: 0;
    p{
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

function Footer() {
    return (
        <FooterStyled>
            <ContactUs></ContactUs>
            <p>&copy; Flavos.ID 2020</p>
        </FooterStyled>
    )
}

export default Footer
