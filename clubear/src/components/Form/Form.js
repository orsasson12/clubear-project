import { useState } from 'react'
import axios from 'axios'
import './Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const goodRequest = () => toast("תודה שהשארת פרטים נחזור בהקדם 😄");
    const badRequest = () => toast('אוי משהו לא עבד טוב 😓')

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        numberOfPeople: ''
    })
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://clubear.herokuapp.com/', {
                ...form
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            goodRequest()
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                numberOfPeople: ''
            })

        } catch (error) {
            badRequest()
            
        }

    }

    const handelChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className='formContainer' id='contact'>
            <h2>דברו איתנו</h2>
            <ToastContainer autoClose={2000} />
            <form onSubmit={handelSubmit}>
                <div className='wrapper'>
                    <div className='box'>
                        <input type='text' name='firstName' id='firstName' value={form.firstName} required onChange={handelChange} />
                        <label htmlFor='firstName'>שם פרטי</label>
                    </div>
                    <div className='box'>
                        <input type='text' name='lastName' id='lastName' value={form.lastName} required onChange={handelChange} />
                        <label htmlFor='lastName'>שם משפחה</label>
                    </div>
                </div>
                {/*  */}

                <div className='wrapper'>
                    <div className='box'>
                        <input type='email' name='email' id='email' value={form.email} required onChange={handelChange} />
                        <label htmlFor='email'>אימייל</label>
                    </div>
                    <div className='box'>
                        <input type='text' name='phone' id='phone' value={form.phone} required onChange={handelChange} />
                        <label htmlFor='phone'> טלפון</label>
                    </div>
                    <div className='box'>
                        <input type='text' name='numberOfPeople' id='numberOfPeople' value={form.numberOfPeople} required onChange={handelChange} />
                        <label htmlFor='numberOfPeople'>מספר אנשים</label>
                    </div>
                </div>
                {/*  */}

                <div className='buttonContainer' style={{ padding: '1rem' }}>
                    <input type='submit' name='' value='שלח' />

                </div>
            </form>
        </div>
    )
}

export default Form