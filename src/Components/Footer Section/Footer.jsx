import React from 'react'
import './footer.scss'
import logo from '../../Components/assets/images/fvt__1_.png'

function Footer() {
  return (
   
      <footer>
          <div className="columns">
            <div className="footerColumn">
                <img src={logo} alt="no image" />
                <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                <div className="socialMediaLogos">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div className="footerColumn">
              <p className='contact'>Contacts</p>
              <div className="location">
                <i class="bi bi-geo-alt"></i>
                      <div className="address">
                        <span>OUR ADDRESS: </span>
                        <p>15/41B, Ganesh Nagar , Tilak Nagar ,West Delhi pin code:110018</p>
                      </div>
              </div>
              <div className="location">
              <i class="bi bi-envelope-open"></i>
                      <div className="address">
                        <span>OUR MAILBOX: </span>
                        <p>desiretodesign05@gmail.com</p>
                      </div>
              </div>
              <div className="location">
              <i class="bi bi-telephone"></i>
                      <div className="address">
                        <span>OUR PHONE: </span>
                        <p>+919818111949, 9818366285</p>
                      </div>
              </div>
            </div>

            <div className="footerColumn">
              <p className='contact'>Our Services</p>
              <div className="links">
                <p>Interior Design</p>
                <p>Architectural Design</p>
                <p>Project Management</p>
                <p>Structural Design</p>
                <p>Landscape Design</p>
                <p>Product Design</p>
              </div>
            </div>

            <div className="footerColumn">
              <p className='contact'>Subscribe</p>
                <div className="links">
                        <p>Follow our newsletter to stay updated about agency.</p>
                </div>
            </div>
            </div>

            <div className="footerEnd">
              <div className="copyrights">
                <p>Copyright © 2022 desiretodesign. All Rights Reserved.</p>
                <div className="privacy">
                <p>Terms of use</p>
                <div class="vr"></div>
                <p>Privacy Environmental Policy</p>
                </div>
              
              </div>
            </div>
         
        </footer>

   
  )
}

export default Footer
