import React from 'react'
import './Footer.css'
import logo from '../../assets/Images/clubear_logo.png'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footer__left-side'>
            <img src={logo} alt='CLUBEAR' width='80%'/>
            </div>
            <div className='footer__right-side'>
                <div className='social-media'>

                    <BsFacebook className='facebook' /> 
                    <BsInstagram className='insta' /> 

                </div>

            </div>
        </div>
    )
}

export default Footer