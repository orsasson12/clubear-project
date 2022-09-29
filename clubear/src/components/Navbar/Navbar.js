import React, { useEffect } from 'react'
import logo from '../../assets/Images/clubear_logo.png'
import { Link as LinkS } from 'react-scroll'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import axios from 'axios'
import { useState } from 'react'
const Navbar = () => {
    const navigate = useNavigate()
    const [toggle, setToogle] = useState(true)
    const user = localStorage.getItem('user')
    const handleHomeButton = () => {
        navigate('/')
    }
    const logoutButton = () => {
        axios.post('https://clubear.herokuapp.com/logout')
        localStorage.clear()
    }
    useEffect(() => {
        const handelClubsNavigate = () => {
            if (window.location.href === 'https://clubear.co.il/') {
                setToogle(true)
            } else {
                setToogle(false)
            }
        }
        handelClubsNavigate()
    }, [])
    return (
        <div className='navbarContainer'>
            <img src={logo} style={{ cursor: 'pointer' }} alt='CLUBEAR' onClick={handleHomeButton} onDoubleClick={() => navigate('/login')} />
            <div className='listContainer'>
                <ul>
                    <li>
                        {toggle ? <LinkS to='#clubs' smooth={true} >Clubs</LinkS> : <button className='daniButton' onClick={() => navigate('/')}>
                            Clubs </button>}


                    </li>
                    <li>
                        <Link className='LinkToAbout' to='/about'>About</Link>
                    </li>
                    {user &&
                        <li onClick={logoutButton}>
                            Logout
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar