import React from 'react'
import './Header.css'
import headerPic from '../../assets/Images/openingPic.jpeg'

import { Link as LinkS } from 'react-scroll'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className='headerContainer'>
          
                <Navbar />
          
            <div className='imgContainer'>
                <img className='imgHeader' src={headerPic} alt='club' />
                <p>Trying to find
                    a party tonight?
                    Look no further.</p>
                <LinkS
                    to='#clubs'
                    smooth={true}

                    className='buttonLink'><button type='button' ><span>BOOK YOUR TABLE</span></button></LinkS>
            </div>
        </div>
    )
}

export default Header