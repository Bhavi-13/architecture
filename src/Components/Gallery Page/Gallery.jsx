import React, {useState} from 'react'
import './gallery.scss'
import './galleryMedia.scss'
import Menu from '../Header Section/Menu'
import Footer from '../Footer Section/Footer'
import GalleryContent from '../Gallery Content/GalleryContent'


function Gallery() {
  return (
    <>
        <Menu/>
          <div className="gallery_info">
            <div className="banner">
                <div className="content-section">
                    <h3>GALLERY</h3>
                    <p><a href="/">HOME</a> .. <span>GALLERY</span></p>
                </div>
            </div>
            </div>
        <GalleryContent/>
        <Footer/>
    </>
  )
}

export default Gallery
