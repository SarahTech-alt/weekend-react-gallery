import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    getGallery();
  }, []);
// initiate a variable to hold the gallery 
// from the get request and to use throughout the app
  const [galleryArray, setGalleryArray] = useState([])

  // get the gallery information from the router
  // input into galleryArray
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('successfully got gallery items', response);
      console.log(response.data);
      setGalleryArray(response.data)
    }).catch(error => {
      console.log('there was an error getting gallery', error);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* {JSON.stringify(galleryArray)}> */}
      {/* Display GalleryList return here
      send galleryArray and getGallery 
      for components to use */}
      <GalleryList galleryArray={galleryArray}
        getGallery={getGallery} />
    </div>
  );
}

export default App;
