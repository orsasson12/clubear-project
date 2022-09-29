import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddClub = () => {
    const goodRequest = () => toast("♥🔃המועדון עלה וואחשלי אל תדאג רק תרפרש");
    // const [selectedFile, setSelectedFile] = useState(null);
    const [clubName, setClubName] = useState('')
    const [description, setDescription] = useState('')
    const [openingHours, setOpeningHours] = useState('')
    const [musicType, setMusicType] = useState([])
    const [clubLocation, setClubLocation] = useState('')
    const [entryAge, setEntryAge] = useState('')
    const [clubImg, setClubImg] = useState('')
    // const handleImageChange = (e) => {
    //     if (e.target.files) {
    //         setSelectedFile(e.target.files[0])
    //     }
    // };




    const handelFormSubmit = (e) => {
        e.preventDefault()
        setClubName('')
        setClubLocation('')
        setDescription('')
        setEntryAge('')
        setMusicType([])
        setOpeningHours('')
        setClubImg('')
        // setSelectedFile(null)

        handelAddClub()
    }

    const handelAddSize = (e) => {
        if (e.target.value) {
            setMusicType((pervMusicType) => {
                const musicType = e.target.value
                const newArrayOfSizes = pervMusicType.concat({
                    musicType: musicType,
                    isChecked: true
                })

                const val = e.target.value
                for (let music of newArrayOfSizes) {
                    if (music.musicType === val) {
                        e.target.className = 'green'
                        music.className = 'green'
                    }
                }
                return newArrayOfSizes
            })


        }
    }

    const handelAddClub = async () => {
        const formData = new FormData()
        formData.append('clubName', clubName)
        formData.append('description', description)
        formData.append('openingHours', openingHours)
        formData.append('clubLocation', clubLocation)
        formData.append('entryAge', entryAge)
        formData.append('clubImg', clubImg)
        // formData.append('image', selectedFile)
        musicType.forEach((value) => {
            formData.append('musicType', value.musicType)
        })

        try {
            let { data } = await axios.post('https://clubear.herokuapp.com/postClub', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "x-access-token": localStorage.getItem('user'),
                }
            })
            goodRequest()
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <ToastContainer autoClose={2000} />
            <form onSubmit={handelFormSubmit}>
                <h3>הוספת מועדון </h3>
                <label htmlFor='clubName'>Club Name</label>
                <input type='text'
                    placeholder='club name'
                    id='clubName'
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)} />

                <label htmlFor='description'>description</label>
                <input type='text'
                    placeholder='description'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <label htmlFor='openingHours'>opening Hours</label>
                <input type='text'
                    placeholder='club name'
                    id='openingHours'
                    value={openingHours}
                    onChange={(e) => setOpeningHours(e.target.value)} />

                <div className='musicTypes'>
                    <label htmlFor='sizes'>סוגי מוזיקה</label>

                    <input type='button' value='מיינסטרים' onClick={(e) => handelAddSize(e)} name='check1' />
                    <input type='button' value='טכנו' onClick={(e) => handelAddSize(e)} name='check2' />
                    <input type='button' value='היפ הופ' onClick={(e) => handelAddSize(e)} name='check3' />
                    <input type='button' value='האוס' onClick={(e) => handelAddSize(e)} name='check4' />
                    <input type='button' value='טראנס' onClick={(e) => handelAddSize(e)} name='check5' />
                    <input type='button' value='פופ' onClick={(e) => handelAddSize(e)} name='check5' />
                    <input type='button' value='דאנסהול' onClick={(e) => handelAddSize(e)} name='check5' />
                    <input type='button' value='טראפ ' onClick={(e) => handelAddSize(e)} name='check5' />
                    <input type='button' value='אלקטרוני  ' onClick={(e) => handelAddSize(e)} name='check5' />
                    <input type='button' value='דיסקו   ' onClick={(e) => handelAddSize(e)} name='check5' />
                </div>



                <label htmlFor='clubLocation'>clubLocation</label>
                <input type='text'
                    placeholder='clubLocation'
                    id='clubLocation'
                    value={clubLocation}
                    onChange={(e) => setClubLocation(e.target.value)} />

                <label htmlFor='entryAge'>entryAge</label>
                <input type='text'
                    placeholder='entryAge'
                    id='entryAge'
                    value={entryAge}
                    onChange={(e) => setEntryAge(e.target.value)} />

                <label htmlFor='img'>Picture</label>
                <input type='text' placeholder='imageURL' onChange={(e)=> setClubImg(e.target.value)} />
                {/* <input type='file' placeholder='images' onChange={handleImageChange} /> */}
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {musicType.map((music, i) => {
                        return <p key={i}>{music.musicType} ,</p>
                    })}
                </div>
                <button type='submit'>lets try</button>
            </form>

        </>
    )
}

export default AddClub