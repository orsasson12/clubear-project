import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'

const AdminLogin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',

    });
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://clubear.herokuapp.com/login', user)
            setUser({
                email: '',
                password: ''
            })
            navigate('/')
            localStorage.setItem('user', data)
        } catch (error) {
            console.log(error);
        }
    }
  

    const changeHandler = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={changeHandler} name='email' type='email' value={user.email} placeholder='תכניס פה את המייל יא אח' />
            <input onChange={changeHandler}
                value={user.password}
                name="password"
                type='password'
                placeholder="ועכשיו את הסיסמא נשמה שלי" />
            <button type='submit'>תלחץ לחיבור</button>
        </form>
    )
}

export default AdminLogin