import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ galleryArray }) {
    console.log(galleryArray);
    return (
        <>
            <div>
                {galleryArray.map(picture => (
                    <div>
                        <GalleryItem key={picture.id}
                            picture={picture}
                        />
                    </div>
                ))}

            </div>

        </>
    );
}

export default GalleryList;