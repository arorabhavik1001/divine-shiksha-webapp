import React from 'react'
import divinewhite from '../images/divinewhite.png';

function Footer() {
    return (
        <div>
             <footer id="footer" className="footer style2">
                    <div className="container">
                        <div className="footer-information">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 info-left">
                                    <div className="logo-footer">
                                        <a href="http://www.divineshiksha.com/"><img src={divinewhite} class="footimg" alt="image" /></a>
                                    </div>{/* logo-footer */}
                                    <ul className="flat-socials">
                                        <li><a href="https://www.facebook.com/Divine-Shiksha-102200091486191/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/AtulyaNimai" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.youtube.com/c/AtulyaNimaaiDas/" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                        <li><a href="https://www.instagram.com/divine_shiksha/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>{/* col-md-6 */}
                                <div className="col-md-6 col-sm-6 info-right">
                                    <ul className="flat-information">
                                    <li><span>Phone:</span><a href="#"> +91-9929-3698-44</a></li>
                                    <li><span>E-mail:</span><a href="mailto:atulyanimaaidas@gmail.com">  atulyanimaaidas@gmail.com</a></li>
                                    <li><span>Address:</span><a href="#"> F-4, Subhash Nagar, Shopping center, opp.Kanha Sweets, Jaipur-302016</a></li>
                                </ul>
                                </div>{/* col-md-6 */}
                            </div>{/* row */}
                        </div>{/* footer-information */}
                         
                    </div>{/* container */}  
                </footer>{/* footer */}
                <div className="bottom style2 footer">
                    <div className="container ">
                        <div className="copyright">
                            <p>Copyright © 2021 Divine Shiksha, Online Divine Learning | Created by <span style={{color:"orange", "text-decoration":"underline"}}>Gauranga Websoft</span></p>
                        </div>
                    </div>
                </div>{/* bottom */}   
        </div>
    )
}

export default Footer
