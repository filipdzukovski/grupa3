import React from 'react';
import { GalleryContext } from '../utils/GalleryContext';
import { useContext } from 'react';

export const Popup = ({zatvoriSlika,imageUrl}) => {
    const {selectedPhoto,setSelectedPhoto} = useContext(GalleryContext);

    return(
        <div id="popup">
            <button onClick={()=>{setSelectedPhoto("")}} className='close-popup'>&times;</button>
                    {/* onClick={zatvoriSlika} */}
            <div className='popup-container'>
                <img src={selectedPhoto} alt={""}/> 
                {/* <img src={imageUrl} alt={""}/>  */}
            </div>
        </div>
    )
}