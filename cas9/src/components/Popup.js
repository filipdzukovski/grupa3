import React from 'react';
import { GalleryContext } from '../utils/GalleryContext';
import { useContext } from 'react';

export const Popup = ({zatvoriSlika,imageUrl}) => {
    const {selectedPhoto,setSelectedPhoto,deletePhoto} = useContext(GalleryContext);

    return(
        <div id="popup">
            <button onClick={()=>{setSelectedPhoto("")}} className='close-popup'>&times;</button>
            <button onClick={deletePhoto} className='delete-photo'>del</button>
                    {/* onClick={zatvoriSlika} */}
            <div className='popup-container'>
                <img src={selectedPhoto.url} alt={""}/> 
                {/* <img src={imageUrl} alt={""}/>  */}
            </div>
        </div>
    )
}