import { useState } from 'react';

function GalleryItem({picture}) {

    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
       

        <div>
            {
                isDisplayed ? (
                    <>
                    <img src={picture.path} onClick={()=>
                    setIsDisplayed(false)}/>
                    </>
                ) : (
                    // else
                    <>
                    <p onClick={() => setIsDisplayed(true)}>picture.description</p>
                    </>
                )
            }
            <br />
            <button>Like</button>
            <hr />
        </div>
    )
}

export default GalleryItem;