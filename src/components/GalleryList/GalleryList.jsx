

function GalleryList (props) {
    
    return (
        <ul>
        {props.galleryArray.map(picture => 
            (<li key={picture.id}>{picture.description}</li>)
            )}
            </ul>
    );
}

export default GalleryList;