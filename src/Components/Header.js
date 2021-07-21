import React from "react";
// import { useHistory  } from 'react-router-dom';
import Divine from "../images/Divine.png";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-modal";

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
      isModalOpen: false,
      menu: "",
    };
  }
  cross = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    const { isModalOpen } = this.state;
    return (
      <React.Fragment>
        <Modal isOpen={isModalOpen} style={stylesByBhavik}>
          <React.Fragment>
            <p
              onClick={this.cross}
              className="cross"
              style={{
                float: "right",
                color: "white",
                "background-color": "#ffbf43",
                width:"1rem"
              }}
            >
              X
            </p>
            <br />
            <ul className="menu">
              <li style={{margin:".3rem"}}>
                <a href="/" title="" style={{color: "white", textDecoration:"underline"}}>
                  HOME
                </a>
              </li>
              <li style={{margin:".3rem"}}>
                <a href="/courses" title="" className="has-mega" style={{color: "white", textDecoration:"underline"}}>
                  COURSES
                </a>
              </li>
              <li style={{margin:".3rem"}}>
                <a href="/about/speaker" title="" style={{color: "white", textDecoration:"underline"}}>
                  THE SPEAKER
                </a>
              </li>
              {/* <li><a href="http://localhost:3000/gallery" title="">GALLERY</a> */}
              {/* </li> */}
              <li style={{margin:".3rem"}}>
                <a href="/donate" title="" style={{color: "white", textDecoration:"underline"}}>
                  DONATE
                </a>
              </li>
              <li style={{margin:".3rem"}}>
                <a href="/vedicamp" title="" style={{color: "white", textDecoration:"underline"}}>
                  SUMMER CAMP
                </a>
              </li>
              <li style={{margin:".3rem"}}>
                <a href="/contact" title="" style={{color: "white", textDecoration:"underline"}}>
                  CONTACT
                </a>
              </li>
            </ul>
          </React.Fragment>
        </Modal>
        {/* Boxed */}

        <div className="wrap-header clearfix">
          <div className="top top-style3">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ul className="flat-information">
                    <li>
                      <span>Phone:</span>
                      <a href=""> +91-9929-3698-44</a>
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
                        <a href="" target="_blank">
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
                          href="https://www.instagram.com/divine_shiksha/"
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
                    <MenuIcon
                      onClick={() => this.setState({ isModalOpen: true })}
                    />
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
