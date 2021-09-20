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

  const [itemDisplayed, setItemDisplayed] = useState(false);

  const [galleryArray, setGalleryArray] = useState([])

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
      <GalleryList galleryArray={galleryArray}
        setItemDisplayed={setItemDisplayed}
        getGallery={getGallery} />
    </div>
  );
}

export default App;
