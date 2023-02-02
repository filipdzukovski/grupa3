import React from 'react';
import {Popup} from './Popup';
import { GalleryContext } from '../utils/GalleryContext';
import { useContext } from 'react';

export const Gallery = ({listOfPhotos}) => {

    const {selectedPhoto,setSelectedPhoto} = useContext(GalleryContext);
    return(
        <div id="gallery">
            {listOfPhotos.slice(0,50).map(photo=>{
                return(
                    // onClick={()=>setSelectedImage(photo.url)}
                    <div onClick={()=>setSelectedPhoto(photo)} key={photo.id} className='image-holder'>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                    </div>
                )
            })}
            
            {Object.keys(selectedPhoto).length > 1 && <Popup/>}  {/* {selectedPhoto !== "" && <Popup imageUrl={selectedPhoto} zatvoriSlika={closePhoto}/>} */}
           
        </div>
    )
}