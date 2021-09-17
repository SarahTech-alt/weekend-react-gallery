import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ galleryArray }) {
    console.log(galleryArray);

    return (
        <>
            <div>
                {galleryArray.map(picture => (
                    
                        <GalleryItem key={picture.id}
                            picture={picture}
                        />
                   
                ))}

            </div>

        </>
    );
}

export default GalleryList;