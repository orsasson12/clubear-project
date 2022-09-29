import React, { useEffect } from 'react'
import ClubsList from '../components/Clubs/ClubsList'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import axios from 'axios'
import { useState } from 'react';
import AddClub from '../components/AdminLogin/AddClub'
import LoadingSpinner from '../components/Loading/LoadingSpinner'
const Home = () => {
    const adminUser = localStorage.getItem('user')
    const [loading, setLoading] = useState(false)
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        const uploadData = async () => {
            setLoading(true)
            const { data } = await axios.get('https://clubear.herokuapp.com/clubs')
            setClubs(data)
            setLoading(false)
        }
        uploadData()
    }, [])




    return (
        <div>
            <div className="check">
                <Header />
            </div>
            {adminUser && <AddClub />}
            {loading ? <LoadingSpinner /> : <ClubsList clubs={clubs} />}
            <Footer />
        </div>
    )
}

export default Home