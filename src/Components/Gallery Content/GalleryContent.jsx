import React, {useState} from 'react'


import arcPic from '../../Components/assets/images/architecturepic.jpeg'
import picture1 from '../../Components/assets/images/Picture1.jpg'
import picture2 from '../../Components/assets/images/Picture2.jpg'
import picture3 from '../../Components/assets/images/Picture3.jpg'
import picture4 from '../../Components/assets/images/Picture4.jpg'
import picture5 from '../../Components/assets/images/Picture5.jpg'
import picture6 from '../../Components/assets/images/Picture6.jpg'
import picture7 from '../../Components/assets/images/Picture7.jpg'
import picture8 from '../../Components/assets/images/Picture8.jpg'
import picture9 from '../../Components/assets/images/Picture9.jpg'
import picture10 from '../../Components/assets/images/Picture10.jpg'
import picture11 from '../../Components/assets/images/Picture11.jpg'
import picture12 from '../../Components/assets/images/Picture12.jpg'
import picture13 from '../../Components/assets/images/Picture13.jpg'
import picture14 from '../../Components/assets/images/Picture14.jpg'
import picture15 from '../../Components/assets/images/Picture15.jpg'
import picture16 from '../../Components/assets/images/Picture16.jpg'
import picture17 from '../../Components/assets/images/Picture17.jpg'
import picture18 from '../../Components/assets/images/Picture18.jpg'
import picture19 from '../../Components/assets/images/Picture19.jpg'
import picture20 from '../../Components/assets/images/Picture20.jpg'
import picture21 from '../../Components/assets/images/Picture21.jpg'
import picture22 from '../../Components/assets/images/Picture22.jpg'
import picture23 from '../../Components/assets/images/Picture23.jpg'
import picture24 from '../../Components/assets/images/Picture24.jpg'
import picture25 from '../../Components/assets/images/Picture25.jpg'

function GalleryContent() {

    const [selectedOption, setSelectedOption] = useState('All');
    const [visibleImageCount, setVisibleImageCount] = useState(6);

   

    //  For images
  const allImages = [
    { id: 1, category: 'Architecture', imageSrc: arcPic },
    { id: 2, category: 'Interior',imageSrc: picture1 },
    { id: 3, category: 'Interior',imageSrc: picture2 },
    { id: 4, category: 'Interior',imageSrc: picture3 },
    { id: 5, category: 'Interior',imageSrc: picture4 },
    { id: 6, category: 'Interior',imageSrc: picture5 },
    { id: 7, category: 'Interior',imageSrc: picture6 },
    { id: 8, category: 'Interior',imageSrc: picture7},
    { id: 9, category: 'Interior',imageSrc: picture8 },
    { id: 10, category: 'Interior',imageSrc: picture9 },
    { id: 11, category: 'Interior',imageSrc: picture10 },
    { id: 12, category: 'Interior',imageSrc: picture11 },
    { id: 13, category: 'Interior',imageSrc: picture12},
    { id: 14, category: 'Interior',imageSrc: picture13 },
    { id: 15, category: 'Interior',imageSrc: picture14 },
    { id: 16, category: 'Interior',imageSrc: picture15 },
    { id: 17, category: 'Interior',imageSrc: picture16 },
    { id: 18, category: 'Interior',imageSrc: picture17 },
    { id: 19, category: 'Interior',imageSrc: picture18 },
    { id: 20, category: 'Interior',imageSrc: picture19 },
    { id: 21, category: 'Interior',imageSrc: picture20 },
    { id: 22, category: 'Interior',imageSrc: picture21 },
    { id: 23, category: 'Interior',imageSrc: picture22 },
    { id: 24, category: 'Interior',imageSrc: picture23 },
    { id: 25, category: 'Interior',imageSrc: picture24 },
    { id: 26, category: 'Interior',imageSrc: picture25 },

  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleLoadMoreClick = () => {
    const newVisibleCount = visibleImageCount + 6; 
    setVisibleImageCount(newVisibleCount);
  };
 
  const filteredImages = allImages.filter(
    (image) => selectedOption === 'All' || image.category === selectedOption
  );

  const visibleImages = filteredImages.slice(0, visibleImageCount); 


  return (
    <div className='gallery_info'>
            <div className="galleryImages">
              <span>[ OUR PORTFOLIO ]</span>
              <p>Some of Our Work and Case Studies for Clients</p>
              <span className='dots'>.....................</span>

              <div className='buttons'>
                  <button onClick={() => handleOptionClick('All')}>
                    ALL <span className="badge">{allImages.length}</span>
                  </button>
                  <button onClick={() => handleOptionClick('Architecture')}>
                    ARCHITECTURE <span className="badge">{allImages.filter((image) => image.category === 'Architecture').length}</span>
                  </button>
                  <button onClick={() => handleOptionClick('Interior')}>
                    INTERIOR <span className="badge">{allImages.filter((image) => image.category === 'Interior').length}</span>
                  </button>
              </div>
              <div className="image-container">
                  {visibleImages.map((image) => (
                    <img key={image.id} src={image.imageSrc} />
                  ))}
              </div>

              {visibleImageCount < filteredImages.length && (
                <button className='btn' onClick={handleLoadMoreClick}>LOAD MORE</button>
                )}
            </div>
          </div>
  )
}

export default GalleryContent
