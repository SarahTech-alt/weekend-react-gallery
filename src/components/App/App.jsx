import React from 'react';
import axios from 'axios';
import './App.css';
import galleryItem from '../GalleryItem/GalleryItem';
import galleryList from '../GalleryList/GalleryList';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    getGallery();
  }, []);

  const [galleryList, setGalleryList] = useState([])

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('successfully got gallery items', response);
      console.log(response);
    }).catch(error => {
      console.log('there was an error getting gallery', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
      <galleryList getGallery = {getGallery} />
    </div>
  );
}

export default App;
