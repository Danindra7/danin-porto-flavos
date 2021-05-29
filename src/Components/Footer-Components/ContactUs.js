import React from 'react'
import styled from 'styled-components'

const ContactUsStyled = styled.div`
    padding: 0 1rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* background-color: blue; */
    .contact-item{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        /* background-color: red; */
    }
    i, h3{
        margin: 0 10px 10px 0;

    }
`

function ContactUs() {
    return (
        <ContactUsStyled>
            <h2>Contact Us</h2>
            <div className="contact-item">
                <i class="fab fa-instagram"></i>
                <h3>flavos.id</h3>
            </div>
            <div className="contact-item">
                <i class="fab fa-whatsapp"></i>
                <h3>+6289518009973</h3>
            </div>
        </ContactUsStyled>
    )
}

export default ContactUs
