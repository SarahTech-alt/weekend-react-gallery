import { useState } from 'react';

function GalleryItem({picture}) {

    const [isDisplayed, setIsDisplayed] = useState(true);
    const [likeCounter, setLikeCounter] = useState(0);

    return (
       

        <div class = "container">
            {
                isDisplayed ? (
                    <div class = "item">
                    <img src={picture.path} onClick={()=>
                    setIsDisplayed(false)}/>  <br />
                     <button onClick={() => setLikeCounter(likeCounter+1)}>Like</button><br />
                    This picture has been liked {likeCounter} times
                    </div>
                ) : (
                    // else
                    <div class = "item">
                    <p onClick={() => setIsDisplayed(true)}>{picture.description}</p> <br />
                    <button onClick={() => setLikeCounter(likeCounter+1)}>Like</button>
                    <p>This picture has been liked {likeCounter}</p>
                    </div>
                )
            }
          
            
       
        </div>
    )
}

export default GalleryItem;