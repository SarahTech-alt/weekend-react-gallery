import React from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ galleryArray, getGallery }) {
    // check that props was passed down correctly
    console.log(galleryArray);
    return (
        <>
            <div className="container">
                {/* iterate over galleryArray
                and send to GalleryItem component
                with key, picture object and the function getGallery
                 */}
                {galleryArray.map(picture => (
                    <GalleryItem
                        key={picture.id}
                        picture={picture}
                        getGallery={getGallery}
                    />
                ))}
            </div>
        </>
    );
}

export default GalleryList;