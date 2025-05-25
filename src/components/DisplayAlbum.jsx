import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets'


const DisplayAlbum = () => {

        const {id} = useParams();
        const albumData = albumsData[id]
        console.log(albumData)

    return (
        <>
            <NavBar/>
            <div className = 'mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className = 'w-48 rounded'  src={albumData.image} alt=""/> 
                <div className ='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className ='' >albumData.name</h2>
                    <h4>albumData.desc</h4>
                    <p>
                        <img className= '' src={assets.spotify_logo} alt=""/>
                        <b>Spotify</b>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DisplayAlbum