import { useState } from 'react';

function GalleryItem({picture}) {

    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
       

        <div class = "items-displayed">
            {
                isDisplayed ? (
                    <div class = "display">
                    <img src={picture.path} onClick={()=>
                    setIsDisplayed(false)}/>  <br />
                    <button>Like</button>
                    </div>
                ) : (
                    // else
                    <div class = "display">
                    <p onClick={() => setIsDisplayed(true)}>{picture.description}</p> <br />
                    <button>Like</button>
                    </div>
                )
            }
          
            
       
        </div>
    )
}

export default GalleryItem;