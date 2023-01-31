import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Albums } from './Albums';
import { Posts } from './Posts';
import { Navigation } from './Navigation';
import { API_URL } from './../utils/constants';
import { Comments } from './Comments';
import { SingleComment } from './SingleComment';
import { Gallery } from './Gallery';
import { GalleryContext } from '../utils/GalleryContext';

export function App() {

    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto,setSelectedPhoto] = useState("");

    useEffect(() => {
        //fetch za albums
        fetch(API_URL + '/albums')
            .then(res => res.json())
            .then(result => setAlbums(result))
            .catch(err => alert(err))
        //fetch za photos
        fetch(`${API_URL}/photos`)
            .then(res => res.json())
            .then(json => setPhotos(json))
            .catch(err => alert(err))

    }, [])

    // function setSelectedImage(photoUrl){
    //     console.log(photoUrl)
    //     setSelectedPhoto(photoUrl)
    // }

    // function closePhoto(){
    //     setSelectedPhoto("")
    // }

    return (
        <div id="app">
            <Navigation />
            <GalleryContext.Provider value={{selectedPhoto,setSelectedPhoto}}>
            <Routes>
                <Route path="/albums" element={<Albums listOfAlbums={albums} />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/single-comment/:id" element={<SingleComment />} />
                <Route path="/gallery"
                 element={<Gallery
                //  setSelectedImage={setSelectedImage}
                //  selectedPhoto={selectedPhoto}
                //  closePhoto={closePhoto}
                 listOfPhotos={photos}/>} />
            </Routes>
            </GalleryContext.Provider>
        </div>
    )
}