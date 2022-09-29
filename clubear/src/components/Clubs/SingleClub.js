import React, { useEffect } from 'react'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css';
import MapLocation from '../Map/MapLocation';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import { useState } from 'react';
import { Link as LinkS } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import Navbar from '../Navbar/Navbar';
import Whatsapp from '../Whatsapp/Whatsapp';
import Form from '../Form/Form';
import { FiEdit } from 'react-icons/fi'
import UpdateClub from '../AdminLogin/UpdateClub';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleClub = () => {
  const goodRequest = () => toast("♥🔃המועדון התעדכן וואחשלי אל תדאג רק תרפרש");
  let { clubId } = useParams()
  const [clubDetails, setClubDetails] = useState({})
  const [toogleForm, setToogleForm] = useState(false)
  const user = localStorage.getItem('user')

  useEffect(() => {
    const getClubById = async () => {
      scroll.scrollToTop()
      const { data } = await axios.get(`https://clubear.herokuapp.com/${clubId}`)
      setClubDetails(data)
    }
    getClubById()
  }, [clubId])

  useEffect(() => {
    Aos.init({ duration: 2500, })
  }, [])

  const handleFormButton = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('clubName', clubDetails.clubName)
    formData.append('description', clubDetails.description)
    formData.append('openingHours', clubDetails.openingHours)
    formData.append('clubLocation', clubDetails.clubLocation)
    formData.append('entryAge', clubDetails.entryAge)
    formData.append('clubImg', clubDetails.clubImg)
    clubDetails.musicType.forEach((value) => {
      formData.append('musicType', value)
    })

    const { data } = await axios.patch(`https://clubear.herokuapp.com/${clubId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "x-access-token": localStorage.getItem('user')
      }
    })
    console.log(data);
    goodRequest()
    return data
  }
  const handleToogle = () => {
    setToogleForm(!toogleForm)

  }

  return (
    <>
      <Navbar />
      <div dir='rtl' className='checking2'>
        <ToastContainer autoClose={2000} />
        <div className='singleClubImg'>
        <img src={clubDetails.clubImg} alt={clubDetails.clubName}  />
        </div>
        <div className='singleClubDetailsContainer'>
          {
            user &&
            <div>

              <FiEdit onClick={handleToogle} />
              {toogleForm && <UpdateClub handleFormButton={handleFormButton} clubDetails={clubDetails} setClubDetails={setClubDetails} />}
            </div>
          }
          <div className='grid__container'>
            <div className='rightSide'>
              <h2>{clubDetails.clubName}</h2>
              <p className='openingTimes'>זמני פתיחה : {clubDetails.openingHours} </p>
              <LinkS to='#location' smooth={true}><span>המיקום שלנו </span></LinkS>
              <p className='descripition' data-aos='fade-up'>{clubDetails.description}</p>
              {
                !clubDetails.musicType ? null : clubDetails.musicType < 1 ? <p className='musicTypes'> {clubDetails.musicType} </p> : <p className='musicTypes'>  סגנונות מוזיקה : {clubDetails.musicType.join(' , ')}</p>
              }
              <p style={{ fontSize: '1.5rem', color: 'white' }}>  גיל כניסה : {clubDetails.entryAge}+ </p>
              <Whatsapp />
            </div>
            <Form />
          </div>
        </div>
      </div>

      <MapLocation clubLocation={clubDetails.clubLocation} />
      <Footer />
    </>
  )
}

export default SingleClub