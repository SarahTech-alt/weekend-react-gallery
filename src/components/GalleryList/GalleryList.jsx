

function GalleryList (props) {
    
    return (
        <div>
        {props.galleryArray.map(picture => 
            (<p key={picture.id}><img src={picture.path} alt={picture.description}/></p>)
            )}
            </div>
    );
}

export default GalleryList;