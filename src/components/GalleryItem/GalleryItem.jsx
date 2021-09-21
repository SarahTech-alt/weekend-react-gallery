import { useState } from 'react';
import axios from 'axios';

function GalleryItem({ picture, getGallery }) {
    // initiate a state variable for conditional rendering
    const [isDisplayed, setIsDisplayed] = useState(true);

    // Sends the unique id to the router to increment the 
    // like count by one in the gallery.data array
    // then the updated gallery is displayed
    const likePicture = (pictureId) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${pictureId}`
        }).then(response => {
            console.log('success updating likes');
            getGallery();
        }).catch(response => {
            console.log('there was an error updating likes', error);
        })
    }
    return (
        <div>
            {
                // check whether isDisplayed is true or false
                // if true display the picture
                // change to false when the picture is clicked
                // include a like button to increase the number
                // of likes displayed using likePicture function
                isDisplayed ? (
                    <div className="item">
                        <img alt={picture.description} src={picture.path} onClick={() =>
                            setIsDisplayed(false)} />  <br /> <br />
                        <button onClick={() => getLikes(picture.id)}>Like</button><br />
                        <p className="likes">This picture has been liked {picture.likes} times</p>
                    </div>
                ) : (
                    // else if isDisplayed is false display the picture description
                    // set back to true when the description is clicked
                    // include a like button to increase the number
                    // of likes displayed using likePicture function
                    <div className="item">
                        <p className="description" onClick={() => setIsDisplayed(true)}>{picture.description}</p> <br />
                        <button onClick={() => likePicture(picture.id)}>Like</button>
                        <p className="likes">This picture has been liked {picture.likes}</p>
                    </div>
                )
            }

        </div>
    )
}

export default GalleryItem;