import { useState } from 'react';
import axios from 'axios';

function GalleryItem({picture, getGallery}) {

    const [isDisplayed, setIsDisplayed] = useState(true);
   

    const getLikes = (pictureId) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${pictureId}`
          }).then(response => {
              console.log('success updating likes');
          }).catch(response => {
              console.log('there was an error updating likes', error);
          })
          getGallery();
    }

    return (
       

        <div>
            {
                isDisplayed ? (
                    <div className = "item">
                    <img src={picture.path} onClick={()=>
                    setIsDisplayed(false)}/>  <br />
                     <button onClick={() => getLikes(picture.id)}>Like</button><br />
                    <p className = "likes">This picture has been liked {picture.likes} times</p>
                    </div>
                ) : (
                    // else
                    <div className = "item">
                    <p onClick={() => setIsDisplayed(true)}>{picture.description}</p> <br />
                    <button onClick={() => getLikes(picture.id)}>Like</button>
                    <p className = "likes">This picture has been liked {picture.likes}</p>
                    </div>
                )
            }
          
            
       
        </div>
    )
}

export default GalleryItem;