import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer">
                    <div className="footerNav">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Our Thmes</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footerBottom">
                    <p>Copyright &copy; 2024; Desinged by <span className='Designer'>Ubaidraza</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer
