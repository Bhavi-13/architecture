import React, {useState} from 'react'
import './services.scss'
import Menu from '../Header Section/Menu'
import Footer from '../Footer Section/Footer'
import './mediaService.scss'

function Services() {

    const [selectedLink, setSelectedLink] = useState("");

    const links = [
        { 
          id: 1, 
          name: 'AWARDS', 
          content:['Best Office Interior Design in New York,, 2018',
          'Between tradition and innovation, Dutch Design Week, 2017',
          'CUBE project, Best Home Design List in Germany, 2015',
          'International Industrial Design Award, 2015']
        },
        { 
          id: 2, 
          name: 'CONCEPT', 
          content:['Between tradition and innovation, Dutch Design Week, 2019',
        'Best Office Interior Design in New York,, 2018',
        'International Industrial Design Award, 2015',
        'CUBE project, Best Home Design List in Germany, 2013']
        },
        { 
          id: 3, 
          name: 'HISTORY', 
          content:['Beginning Our Services, 2006',
          'Offering More Services, 2008',
          'Opening Our First Branch Office, 2009',
          'Expansion and Transformations, 2011',]
        }
      
      ];
    
      const handleLinkClick = (linkId) => {
        setSelectedLink(linkId);
      };

  return (
    <>
    <Menu/>
        <div className='service_info'> 
            <div className="banner">
                <div className="content-section">
                    <h3>Our Services</h3>
                    <p><a href="/">HOME</a> .. <span>OUR SERVICES</span></p>
                </div>
            </div>

            {/* What can we offer CONTENT */}
            <div className="offer">
                <div className="offer_content">
                    <span>[ OUR SERVICES ]</span>
                    <p>WHAT CAN WE OFFER</p>
                    <span className='dots'>.....................</span>
                    <div className="service">
                    <div className="designs">
                        <img src="https://www.tasworld.in/wp-content/uploads/2020/05/iconbox1.2.png.webp" alt="no image"/>
                        <h4>Architectural Design</h4>
                        <p className='info'>Turning your most imaginative and whimsical visions into tangible architectural marvels!</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="designs">
                        <img src="https://www.tasworld.in/wp-content/uploads/2020/05/iconbox2.png.webp" alt="no image"/>
                        <h4>Interior Design</h4>
                        <p className='info'>As the premier interior designers in Delhi, our mission is to transform ordinary spaces into extraordinary masterpieces.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="designs">
                        <img src="https://www.tasworld.in/wp-content/uploads/2020/05/iconbox3.png.webp" alt="no image"/>
                        <h4>Project Management</h4>
                        <p className='info'>Being the project management superhero who seamlessly orchestrates all the pieces, so you can sit back and relax!</p>
                        <button>READ MORE</button>
                    </div>
                    </div>

                    <div className="service">
                        <div className="designs">
                            <img src="https://www.tasworld.in/wp-content/uploads/2020/06/iconbox4.png.webp" alt="no image" />
                            <h4>Structural Design</h4>
                            <p className='info'>Transforming robust creations into the artistic masterpieces you've always envisioned.</p>
                            <button>READ MORE</button>
                        </div>
                        <div className="designs">
                            <img src="https://www.tasworld.in/wp-content/uploads/2020/06/iconbox5.png.webp" alt="no image"/>
                            <h4>Landscape Design</h4>
                            <p className='info'>Harmoniously blending nature and culture to deliver a surreal landscape experience.</p>
                            <button>READ MORE</button>
                        </div>
                        <div className="designs">
                            <img src="https://www.tasworld.in/wp-content/uploads/2020/06/iconbox6.png.webp" alt="no image"/>
                            <h4>Project Design</h4>
                            <p className='info'>Providing your concept with a clear vision and transforming your dreams into a tangible reality.</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profession">
                <div className="professionContent">
                    <div className="icon">
                    <img src="https://t2.gstatic.com/images?q=tbn:ANd9GcReVHpy8K6Fa261VHN9LqGv1hNy2MA5RVoZ1wY5QJfpCQ8e5iMe" alt="" />
                    </div>
                    <div className="headTag">
                        <h3>Professionalism</h3>
                        <p>Certified high-class specialists.</p>
                    </div>
                </div>
                <div className="professionContent">
                <div className="icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2cvHXxMZxEAgIvwo9D_vUT6OQqHr907wtHC9l2EjoVIhqeyq" alt="" />
                    </div>
                    <div className="headTag">
                        <h3>Experience & Skills</h3>
                        <p>Certified high-class specialists.</p>
                    </div>
                </div>
                <div className="professionContent">
                    <div className="icon">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShaGwIpBenFOhcFU7w0A2LVrQi-0TcZ8-Z1Gjn_DLpdqvdsj-a" alt="" />
                    </div>
                    <div className="headTag">
                        <h3>Customer Focus</h3>
                        <p>Certified high-class specialists.</p>
                    </div>
                </div>

            </div>

            <div className="ideas">
                <div className="sideConcept">
                    <span>[ OUR BENEFITS ]</span>
                    <p>Ambitious Studio with a Successful Concept & Ideas</p>
                    <button>VIEW PROJECTS</button>
                </div>
                <div className="sideIdeas">
                    <div className="RowIdeas">
                        <div className="firstConcept">
                            <img className="image1" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLVTLp7xnMSL4F4GvUT1FA45MxA_e0kQrCoe-0Lm7TmJfmuo9I" alt="" />
                            <h3>Customer Focus</h3>
                            <p>Clients select Desire to Design Architects for our commitment to clear and effective communication, as well as our deep understanding of their ultimate design aspirations. </p>
                        </div>
                        <div className="secondConcept">
                            <img className="image2" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU0JZJH5zAyhFAF5R9h9cK7McS06W2Km5JZDOI7BwKuUV4ZKu_" alt="" />
                            <h3>Multi Experience</h3>
                            <p>At Desire to Design Architects, we offer a diverse array of services spanning various design styles, encompassing both commercial and residential projects.</p>
                        </div>
                    </div>
                    <div className="RowIdeas">
                        <div className="thirdConcept">
                            <img className="image3" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTObeo4XNdkouetwGM3qQ-VuZT1Lw3j6IgTBsYQcDODvx5ZmGh0" alt="" />
                            <h3>Professionalism</h3>
                            <p>At Desire to Design Architects, we uphold the highest standards of professionalism by meticulously crafting a comprehensive project documentation cycle.</p>
                        </div>
                        <div className="fourthConcept">
                            <img className="image4" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTs5UMiiMCkv0cT3qbaooX1xBxvtBs7rguaBP43zhZi9HjoMbQq" alt="" />
                            <h3>Author`s Supervision</h3>
                            <p>At Desire to Design Architects, we are dedicated to curating inviting and functional spaces for work and leisure. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="principles">
                <div className="apartmentDesign">
                    <img src="https://www.tasworld.in/wp-content/uploads/2022/09/image1-service.webp" alt="no image" />
                </div>
                <div className="principlesContent">
                    <span>[ MAIN PRINCIPLES]</span>
                    <p>A Sketch of Each Detail</p>
                    <span className='dots'>.....................</span>
                    <div className="principleConcepts">
                            <div className="principle">
                                <span>01.</span>
                                <h4>Apartment Design</h4>
                                <p> We focus on designing spaces that not only prioritize environmental sustainability but also deliver the highest standards of quality and craftsmanship.</p>
                            </div>
                            <div className="principle">
                                <span>02.</span>
                                <h4>Office Design</h4>
                                <p>We prioritize environmentally conscious design principles while ensuring the utmost quality in every aspect of our work.</p>
                            </div>
                            <div className="principle">
                                <span>03.</span>
                                <h4>Shop Design</h4>
                                <p>We place a strong emphasis on environmentally responsible design practices, ensuring that our creations are not only high-quality but also eco-friendly.</p>
                            </div>
                            <div className="principle">
                                <span>04.</span>
                                <h4>House Design</h4>
                                <p>Our approach prioritizes environmentally responsible design practices, ensuring that our projects not only exemplify exceptional quality but also embrace ecological sustainability. </p>
                            </div>
                    </div>
                   
                </div>
            </div>

            
        <div className="features">
            <div className="featureCards">
                <div className="card">
                    <i className='bi bi-lightbulb'></i>
                    <h4>MAKING IDEA</h4>
                </div>
                <div className="card">
                <i class="bi bi-badge-3d"></i>
                    <h4>3D MODELLING</h4>
                </div>
                <div className="card">
                <i class="bi bi-align-top"></i>
                    <h4>PROTOTYPING</h4>
                </div>
                <div className="card">
                <i class="bi bi-house-door"></i>
                    <h4>PLANNING</h4>
                </div>
                <div className="card">
                <i class="bi bi-file-easel"></i>
                    <h4>DESIGNING</h4>
                </div>
                <div className="card">
                <i class="bi bi-diagram-3"></i>
                    <h4>BUILDING</h4>
                  
                </div>
               
            </div>
            <div className="featureContent">
              <span>[ FEATURES]</span>
              <p>Our Philosophy in Simply and Quality Design</p>
              <div className="projectIcons">
                    <div className="linkHeadings">
                        {links.map((link) => (
                          <div key={link.id} className="link" style={{cursor: 'pointer',border: selectedLink === link.id ? '' : '1px solid transparent',}}
                            onClick={() => handleLinkClick(link.id)}>
                            <p className='linkHeading'>{link.name}</p>
                          </div>
                        ))}
                    </div>

                    <div className="linkContent">
                        {selectedLink !== null && (
                            <ul className="contentList">
                                {links.find((link) => link.id === selectedLink)?.content.map((point, index) => (
                                <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
              </div>
            </div>
        </div>

            <div className="dashboardContent">
                <div className="content">
                    <span>[ 100+ ]</span>
                    <p>CURRENT CLIENTS</p>
                </div>
                <div className="content">
                    <span>[ 17+ ]</span>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="content">
                    <span>[ 35+ ]</span>
                    <p>NO.OF EMPLOYEES</p>
                </div>
                <div className="content">
                    <span>[ 2+ ]</span>
                    <p>OFFICES WORLDWIDE</p>
                </div>
            </div>

            <Footer/>

        </div>
    </>
  )
}

export default Services
