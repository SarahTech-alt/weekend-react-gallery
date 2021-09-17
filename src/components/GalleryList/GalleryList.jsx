

function GalleryList ({getGallery}) {
    
    return(
        <>
        {getGallery.map(picture => 
            (<li key = {picture.id}>{picture.description}</li>)
            )}
        </>
    );
}

export default GalleryList;