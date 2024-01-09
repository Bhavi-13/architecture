import React from 'react'
import Menu from '../Header Section/Menu'
import './career.scss'
import Footer from '../Footer Section/Footer'
import './mediaCareer.scss'

function Career() {
  return (
    <>
        <Menu/>

        <div className="career_info">
                <div className="banner">
                    <div className="content-section">
                        <h3>CAREER</h3>
                        <p><a href="/">HOME</a> .. <span>CAREER</span></p>
                    </div>
                </div>

                <div className="formForCareer">
                    <div className="formDetails">
                        <h1>Get in Touch</h1>
                        <form action="">
                            <label htmlFor="name">Your Name(required)</label><br />
                            <input type="text" name="name" id="name" /><br />
                            <label htmlFor="email">Your Email(required)</label><br />
                            <input type="email" name="email" id="email" /> <br />
                            <label htmlFor="subject">Subject</label><br />
                            <input type="text" name="subject" id="subject" /> <br />
                            <label htmlFor="message">Your Message</label><br />
                            <textarea name="message" id="message" cols="50" rows="5"></textarea><br />
                            <button>Send</button>
                        </form>
                    </div>

                    <div className="careerDetails">
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
        </div>
               
        <Footer/>
    </>
  )
}

export default Career
