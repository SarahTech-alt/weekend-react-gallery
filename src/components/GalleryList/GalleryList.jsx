import React from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx'



function GalleryList({ galleryArray, getGallery }) {
    console.log(galleryArray);

    return (
        <>
            <div className="container">
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