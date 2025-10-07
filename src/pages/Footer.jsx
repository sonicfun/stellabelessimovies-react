import React from 'react';
import './footer.css';


function Footer() {

    //This is the footer function which is self-explanatory!
    return (
       <footer id="footer" className="footer">
        <div className="footer-top">
            <div className="container">
                <div className= "row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>Alex</span>
                        </a>
                        <p>
                            This website was made by this guy. Follow him on social media!
                        </p>
                        <div className="social-links mt-3">
                        <a href="https://twitter.com/katsiama" className="twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100004590095240" className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="https://www.instagram.com/alexsonicfun/" className="instagram">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="https://www.youtube.com/@NinjaGaiden2012" className="youtube">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>

       
                 <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                    <h4>Contact</h4>
                    <p>  
                     <strong>Email:</strong> sonicfun2012@gmail.com
                    </p>
                 </div>
                </div>
            </div>
        </div>

       <div className="container">
        <div className="copyright">
            &copy; Copyright{''}
            <strong>
                <span> AK</span>
                </strong>
                . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#"> AK</a>
                </div>
            </div> 

       </footer>
    );
}

export default Footer;
