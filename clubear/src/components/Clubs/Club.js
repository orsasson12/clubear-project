import React from 'react'
import './Club.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BiTrash } from 'react-icons/bi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Club = ({ clubName, description, openingTime, phoneNumber, clubImg, clubId }) => {
    const goodRequest = () => toast("המועדון נמחק אל תדאג😄");
    const adminUser = localStorage.getItem('user')
    const navigate = useNavigate()
    const click = async (id) => {
        navigate(`/${id}`)
    }

    const deleteClub = async (id) => {
        axios.delete(`https://clubear.herokuapp.com/${id}`,{
            headers: {
                "x-access-token": localStorage.getItem('user'),
            }
        })
        goodRequest()
    }
 
    return (
        <div>
            <ToastContainer autoClose={2000} />
            <div className='image' onClick={() => click(clubId)}>

                <img className='image__img' src={clubImg} alt={clubName} />
                <div className='image__overlay image__overlay--blur' >
                    <span>{clubName}</span>
                    <div className='image__title'>Get your table  <span>&#8594;</span> </div>
                </div>
            </div>
            {adminUser &&
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: 'red', width: '50%', cursor: 'pointer' }}>
                        <BiTrash onClick={() => deleteClub(clubId)} />
                        Delete
                    </div>

                </div>
            }
        </div>
    )
}

export default Club