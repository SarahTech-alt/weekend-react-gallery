
import { useState } from 'axios';

function galleryItem({ picture }) {

    const [itemDisplayed, setItemDisplayed] = useState(true);


    return (
        <>
            {
                itemDisplayed ? (
                    <>
                        <img src={picture.path} onClick={() => setItemDisplayed(false)} />
                    </>
                ) : (
                    <>
                    <p onClick={() => setItemDisplayed(true)}>{picture.description}</p>
                     </>
    )}
        </>
    )
}


//change rendering here 

export default galleryItem;