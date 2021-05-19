import React, { useState } from 'react'
import './Navbar.css'

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
        <div className={`header ${header ? 'header active' : 'header'}`}>
            {/* <h1>Danindra Website</h1> */}
            <img className="logo" src="/images/flavos-logo-hitam.png"></img>
        </div>
    )
}

export default Navbar
