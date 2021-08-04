import React from "react";
// import { useHistory  } from 'react-router-dom';
import Divine from "../images/Divine.png";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-modal";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {Button} from "@material-ui/core";

const stylesByBhavik = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#22272b",
    border: "2px solid gray",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "2px 2px 8px gray",
  },
};
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isMModalOpen: false,
      menu: "",
    };
  }
  render() {
    const { isMModalOpen } = this.state;
    return (
      <React.Fragment>
       
        {/* Boxed */}

        <div className="wrap-header clearfix">
          <div className="top top-style3">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ul className="flat-information">
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+919929369844"> +91-9929-3698-44</a>
                    </li>
                    <li>
                      <span>E-mail:</span>
                      <a href="mailto:atulyanimaaidas@gmail.com">
                        {" "}
                        atulyanimaaidas@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                {/* col-md-8 */}
                <div className="col-md-4">
                  <div className="wrap-flat">
                    <ul className="flat-socials">
                      <li>
                        <a
                          href="https://www.facebook.com/Divine-Shiksha-102200091486191/"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                       </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/AtulyaNimai" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/c/AtulyaNimaaiDas/"
                          target="_blank"
                        >
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/coach.and/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* wrap-flat */}
                </div>
                {/* col-md-4 */}
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* top */}
          <header id="header" className="header header-style3 styleheader">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12"
                  style={{
                    height: "150px",
                    "background-color": "255, 255, 255, .6",
                  }}
                >
                  <div className="logo">
                    <a href="/" style={{ "margin-top": "10px" }}>
                      <img src={Divine} alt="image" />
                    </a>
                  </div>
                  {/* /logo */}

                  <div className="wrap-nav">
                    <nav id="mainnav" className="mainnav">
                      <ul className="menu">
                        <li className="active">
                          <a href="/" title="">
                            HOME
                          </a>
                        </li>
                        <li className="has-mega-menu">
                          <a href="/courses" title="" className="has-mega">
                            COURSES
                          </a>
                        </li>
                        <li>
                          <a href="/about/speaker" title="">
                            THE SPEAKER
                          </a>
                        </li>
                        {/* <li><a href="http://localhost:3000/gallery" title="">GALLERY</a> */}
                        {/* </li> */}
                        <li>
                          <a href="/donate" title="">
                            DONATE
                          </a>
                        </li>
                        <li>
                          <a href="/vedicamp" title="">
                            SUMMER CAMP
                          </a>
                        </li>
                        <li>
                          <a href="/contact" title="">
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*wrap-nav */}

                  <div className="mobile-nav">
          {/* <MenuIcon onClick={() => setIsModalOpen(true)} /> */}
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* <Button onClick={() => setIsMModalOpen(true)}>{anchor}</Button> */}
              <MenuIcon onClick={() => this.setState({isMModalOpen:true})} />
              <SwipeableDrawer
                anchor={anchor}
                open={isMModalOpen}
                onClose={() => this.setState({isMModalOpen:false})}
              >
                <div className="row" style={{ textAlign: "center" }}>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem", paddingTop: ".5rem" }}
                  >
                    <a
                      href="/"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      HOME
                    </a>
                  </div>

                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/courses"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      COURSES
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/about/speaker"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      THE SPEAKER
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/donate"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      DONATE
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/vedicamp"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      SUMMER CAMP
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/contact"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none", color:"black" }}
                    >
                      CONTACT US
                    </a>
                  </div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "gray",
                      height: "2.5rem",
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                    onClick={() => this.setState({isMModalOpen:false})}
                  >
                    Close
                  </Button>
                  {/* <Button onClick={() => setIsMModalOpen(false)}>Close</Button> */}
                </div>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
                </div>
                {/* /col-md-12 */}
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </header>
          {/* /header */}
        </div>
        {/* /header3 */}
      </React.Fragment>
    );
  }
}

export default Header;
