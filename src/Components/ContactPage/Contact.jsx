import React from 'react'
import './contact.scss'
import Menu from '../Header Section/Menu'
import Footer from '../Footer Section/Footer'
import './mediaContact.scss'

function Contact() {
  return (
    <>
      <Menu/>
          <div className="contact_info">
              <div className="banner">
                <div className="content-section">
                    <h3>CONTACTS</h3>
                    <p><a href="/">Home</a> .. <span>CONTACTS</span></p>
                    
                </div>
              </div>

                          <div className="contactDetails">
                            <span> [ OUR CONTACT DETAILS ] </span>
                            <h1>Let's Start a Project</h1>
                            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
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
                       
                            <div className="socialMediaLogos">
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-linkedin"></i>
                                <i class="bi bi-instagram"></i>
                            </div>
                        </div>
                    
          </div>

      <Footer/>

    </>
  )
}

export default Contact
