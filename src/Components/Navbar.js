import React, { useState } from 'react'
import styled from 'styled-components'

const NavbarStyled = styled.div`
    .header {
        top: 0;
        position: fixed;
        background-color: transparent;
        transition: 0.4s all ease;
        width: 100%;
    }

    .logo{
        height: 2.5rem;
        padding: 0.5rem 1rem;
        /* di page selain home kasih margin top 3.5rem */
    }

    .active {
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
        background-color: #ffff66;
        transition: 0.4s all ease;
    }

    h1 {
        margin: 0;
        padding: 0.5rem 2rem;
        font-size: 1.5rem;
    }
`

const whiteLogo = "/images/flavos-logo-putih.png"
const blackLogo = "/images/flavos-logo-hitam.png"

function Navbar() {

    const [header, setHeader] = useState(false)

    const changeHeader = () => {
        // console.log(window.scrollY)
        if (window.scrollY > 20) {
            setHeader(true)
        } else setHeader(false)
    }

    window.addEventListener('scroll', changeHeader)

    return (
        <NavbarStyled>
            <div className={`header ${header ? 'header active' : 'header'}`}>
                {/* <h1>Danindra Website</h1> */}
                <img className="logo" src={header ? blackLogo : whiteLogo}></img>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
