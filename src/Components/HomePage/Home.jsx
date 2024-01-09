import React, {useState} from 'react'
import './home.scss'
import './media.scss'
import { Carousel } from 'antd';
import Menu from '../Header Section/Menu';
import Footer from '../Footer Section/Footer';
import GalleryContent from '../Gallery Content/GalleryContent';
import picture14 from '../../Components/assets/images/Picture14.jpg'
import arcPic from '../../Components/assets/images/architecturepic.jpeg'
import picture1 from '../../Components/assets/images/Picture1.jpg'
import picture2 from '../../Components/assets/images/Picture2.jpg'
import picture3 from '../../Components/assets/images/Picture3.jpg'
import picture4 from '../../Components/assets/images/Picture14.jpg'
import picture5 from '../../Components/assets/images/Picture5.jpg'


function Home() {

  const [selectedIcon, setSelectedIcon] = useState("");
 

  // For icons with content
  const icons = [
    { id: 1, name: 'Creating a Concept',iconClass: "bi bi-lightbulb", content: 'Worrying about blueprints can be overwhelming, but rest assured, we have you covered. With your vision and our unwavering commitment, we"ll craft the home of your dreams.' },
    { id: 2, name: 'Budget Planning', iconClass:"bi bi-cash-coin", content: 'Desiring luxury without breaking the bank? At Desire to Design, we firmly believe that everyone should enjoy a space they adore, regardless of their budget. Share your financial parameters with us, and we"ll handle the rest, ensuring your dream space becomes a reality.' },
    { id: 3, name: 'Design Process', iconClass:"bi bi-boxes", content: 'A team of proficient experts, collaborating seamlessly to transform your dream home into a reality. From initiation to completion, we"ll manage every facet of the process, infusing it with our distinctive combination of skill and imagination.' },
    { id: 4, name: 'Building Your Dream', iconClass:"bi bi-diagram-3", content: 'Once we"ve meticulously planned and prepared every detail, our Desire to Design team will enthusiastically embark on the journey to materialize your dream home.' },
  ];

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };
  return (
    <>
    <Menu/>
    <div className="home_info">
      <div className="banner">
      <Carousel autoplay className="carousel">
      <div>
        <img src={arcPic} alt="" />
      </div>
      <div>
        <img src={picture1} alt="" />
      </div>
      <div>
        <img src={picture2} alt="" />
      </div>
      <div>
        <img src={picture3} alt="" />
      </div>
      <div>
        <img src={picture4} alt="" />
      </div>
      <div>
        <img src={picture5} alt="" />
      </div>
    </Carousel>
         {/* <div className="content-section">
            <p className='tag'>BEST ARCHITECTS AND INTERIOR DESIGNERS IN DELHI</p>
            <p>We are available round the clock to assist you in the process of conceptualizing image placement detailed sketch and more.</p>
            <button>CONTACT US</button>
        </div> */}
      </div>
        <div className="desire_world">
          <div className="sideImage">
            <img src={picture14} alt="no image" />
            
          </div>
          <div className="sideContent">
            <span>[ WELCOME ]</span>
            <p>DESIRE TO DESIGN</p>
            <span className='dots'>.....................</span>
            <p className='info'>Bid farewell to the hassles of managing blueprints and contractors. Welcome to Desire to Design – 
            your premier destination for top-tier architects and interior designers in Delhi! We are a versatile firm that provides
             an all-encompassing design solution, seamlessly blending innovation and effectiveness in a single package. Whether it's 
             crafting the initial project vision, curating inspiring mood boards, or overseeing the installation process, we are your 
             steadfast partners every step of the way. Our adept squad of architects, interior designers, and civil engineers is 
             poised and eager to cater to your every design requirement.
            </p>
            <button>
              VIEW PROJECTS
            </button>
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


        <div className='projects'>
            <div className="workingSteps">
              <span>[ WORKING STEPS ]</span>
              <p>OUR WORKING PROCESS</p>
              <span className='dots'>.....................</span>
              <div className="projectIcons">
                {icons.map((icon) => (
                  <div key={icon.id} className="icon" style={{cursor: 'pointer',border: selectedIcon === icon.id ? '' : '1px solid transparent',}}
                    onClick={() => handleIconClick(icon.id)}>
                    <span>{icon.id.toString().padStart(2, '0')}</span>
                    <i className={`bi ${icon.iconClass}`}></i>
                    <p className='iconHeading'>{icon.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Display the selected icon's content in the below div */}
            {selectedIcon !== null && (
              <div className="iconContent">
                {icons.find((icon) => icon.id === selectedIcon)?.content}
              </div>
            )}

            <GalleryContent/>
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

        <div className="clients">
          <img src="https://www.tasworld.in/wp-content/uploads/2020/05/client06.svg" alt="" />
          <img src="https://www.tasworld.in/wp-content/uploads/2020/05/client01.svg" alt=""/>

          <img src="https://www.tasworld.in/wp-content/uploads/2020/05/client02.svg" alt="" />

          <img src="https://www.tasworld.in/wp-content/uploads/2020/05/client03.svg" alt="" />

          <img src="https://www.tasworld.in/wp-content/uploads/2020/05/client04.svg" alt=""/>


        </div>

        <div className="extraInfo">
          <details>
            <summary>Best Architects And Interior Designers In Delhi</summary>
           
            <div className='summeryContent'>
              "Welcome to Desire to Design, where excellence meets innovation, and where you'll find the finest Architects and Interior Designers in Delhi.
              At Desire to Design, our award-winning team stands as Delhi's foremost choice for architectural and interior design brilliance."
            </div>

          </details>
          
          <details>
            <summary>About Desire to Design Architects</summary>
            <div className='summeryContent'>
            Desire to Design Architects is a leading architectural and interior design firm based in Delhi, India. With a passion for turning dreams into reality, our team of accomplished architects and interior designers brings a wealth of creativity, innovation, and technical expertise to every project. We specialize in crafting distinctive, functional, and aesthetically pleasing spaces that resonate with our clients' visions. 
            </div>
          </details>
          <details>
            <summary>Architects And Interior Works</summary>
            <div className='summeryContent'>
            At Desire to Design Architects, we are not just architects; we are creators of immersive environments. Our expertise extends beyond traditional architecture to encompass innovative interior design solutions. With a keen eye for detail and a deep understanding of how spaces influence human experiences, we seamlessly blend architecture and interior design.            
            </div>
          </details>
          <details>
            <summary>Why Desire to Design Is The Best In Architecture Planning ?</summary>
            <div className='summeryContent'>
            Why Desire to Design is the best in architecture planning is no secret. Our firm stands out in the field for its unwavering commitment to excellence and a team of exceptionally talented architects who blend innovation with proven architectural principles. We take the time to understand your vision, meticulously plan every aspect of your project, and execute it with precision.What sets us apart is our ability to infuse creativity, sustainability, and functionality into every design, resulting in architectural marvels that stand the test of time. When you choose Desire to Design, you're choosing a partner dedicated to making your architectural dreams a reality.            
            </div>
          </details>
          <details>
            <summary>What Makes Desire to Design Best In The Industry.</summary>
            <div className='summeryContent'>
            What makes Desire to Design the best in the industry is our unwavering commitment to excellence, creativity, and innovation. With a team of highly skilled architects and designers, we have a proven track record of delivering exceptional projects that exceed client expectations.
            </div>
          </details>
        
        </div>
      <Footer/>


    </div>
    </>
  )
}

export default Home
