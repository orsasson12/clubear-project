import React from 'react'
import './AdminLogin.css'
const UpdateClub = ({ clubDetails, handleFormButton, setClubDetails }) => {
    const handelAddSize = (e) => {
        if (e.target.value) {
            let existingMusicType = clubDetails.musicType.includes(e.target.value);
            let index = clubDetails.musicType.indexOf(e.target.value)
            if (!existingMusicType) {

                clubDetails.musicType.push(e.target.value)
            } else if (index > -1) {

                clubDetails.musicType.splice(index, 1)
            }
            const val = e.target.value
            for (let music of clubDetails.musicType) {
                if (music === val) {
                    e.target.className = 'green'
                } else {
                    e.target.className = 'red'
                }
            }
            return clubDetails.musicType
        }
    }

    console.log(clubDetails);
    // const changeHandler = e => {
    //     let { name, value,files } = e.target
    //     value = name === 'image' ? files[0] : value
    //     setClubDetails({
    //         ...clubDetails,
    //         [name]: value 
    //     })
    // }
    const changeHandler = e => {
        const { name, value } = e.target
        setClubDetails({
            ...clubDetails,
            [name]: value
        })
    }
    return (
        <form onSubmit={handleFormButton}>
            <input onChange={changeHandler} name='clubName' value={clubDetails.clubName} />
            <input onChange={changeHandler} name='description' value={clubDetails.description} />
            <input onChange={changeHandler} name='openingHours' value={clubDetails.openingHours} />
            <input onChange={changeHandler} name='musicType' value={clubDetails.musicType} />
            <input onChange={changeHandler} name='clubLocation' value={clubDetails.clubLocation} />
            <input onChange={changeHandler} name='entryAge' value={clubDetails.entryAge} />
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
            <input type='text' name='clubImg' placeholder='change image' value={clubDetails.clubImg} onChange={changeHandler} />
            <button type='submit'>שלח</button>
        </form>
    )
}

export default UpdateClub