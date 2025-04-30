import './index.css'
import {useState} from 'react'
import axios from 'axios'
function Home() {
    const [image, setImage] = useState()
    const [moviename, setMovieName] = useState()
    const [songlink, setsonglink] = useState()
    const [songname, setsongname] = useState()
    const [artist, setartist] = useState()
    const [duration, setduration] = useState()

    const onAddElement = event => {
        event.preventDefault()
        axios.post('https://deploy-song-back.onrender.com/postsongs', {image, moviename, songlink, songname, artist, duration})
        .then(result => {
            console.log(result)
        })
        .catch(err => {console.log(err)})
    }
    return(
        <div className='Background_1'>
        <form className='Background_2' onSubmit={onAddElement}>
            <div className='Background_3'>
            <div className='Background_4'>
                <label className='EnterHeadindigo'>Enter Song Image</label>
                <input type='text' value={image} onChange={(e) => setImage(e.target.value)} className='EnterInputindigo' placeholder='Enter Image Link'/>
            </div>
            <div className='Background_4'>
                <label className='EnterHeadred'>Enter Song Link</label>
                <input type='text' value={songlink} onChange={(e) => setMovieName(e.target.value)} className='EnterInputred' placeholder='Enter Song Link'/>
            </div>
            <div className='Background_4'>
                <label className='EnterHeadorange'>Enter Movie Name</label>
                <input type='text' value={moviename} onChange={(e) => setsongname(e.target.value)} className='EnterInputorange' placeholder='Enter Movie Name'/>
            </div>
            <div className='Background_4'>
                <label className='EnterHeadviolet'>Enter Song Name</label>
                <input type='text' value={songname} onChange={(e) => setsonglink(e.target.value)} className='EnterInputviolet' placeholder='Enter Song Name'/>
            </div>
            <div className='Background_4'>
                <label className='EnterHeadgreen'>Enter Artist Name</label>
                <input type='text' value={artist} onChange={(e) => setartist(e.target.value)} className='EnterInputgreen' placeholder='Enter Movie Name'/>
            </div>
            <div className='Background_4'>
                <label className='EnterHeadblue'>Enter Duration</label>
                <input type='text' value={duration} onChange={(e) => setduration(e.target.value)} className='EnterInputblue' placeholder='Enter Duration'/>
            </div>
            </div>
            <button type='submit' className='Submit_btn'>Submit</button>
        </form>
        </div>
       )
}

export default Home