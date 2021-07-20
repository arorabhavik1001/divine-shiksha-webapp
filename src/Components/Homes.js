import React, { useState, useEffect } from "react";
import signatu from "../images/aboutus/signatu.jpeg";
import facebook from "../images/iconbox/facebook.png";
import youtube from "../images/iconbox/youtube.png";
import instagram from "../images/iconbox/instagram.png";
import twitter from "../images/iconbox/twitter.png";
import Divine from "../images/aboutus/Divine.png";
import krishna from "../images/krishna.jpg";
import axios from "axios";
import Modal from "react-modal";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { db } from '../firebase'

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
class Homes extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      name: "",
      number: 0,
      subscribedName: "",
      email: "",
    };
  }
  // const {name, setName} = useState('');
  // const {number, setNumber} = useState(10);

  // function handleNameChange(event) {
  //     setName(event.target.value)
  // }
  handleNumberChange = (event) => {
    this.setState({
      number: event.target.value,
    });
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  cross = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleChange = (event, valueHandler) => {
    this.setState({
      [valueHandler]: event.target.value,
    });
  };

  submitRequest = (event) => {
    event.preventDefault();
    this.setState({
        subscribedName: event.target.name.value
    })
    db.collection("subscriptions")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        time: new Date(),
      })
      .then((result) => this.setState({isModalOpen:true}))
      .catch((err) => alert(err.message));

    document.getElementById("newForm").reset();
  };

  render() {
    const { name, number, subscribedName, isModalOpen, email } = this.state;
    return (
      <div>
        {/* <img src={krishna}  /> */}
        <Modal isOpen={isModalOpen} style={stylesByBhavik}>
          <React.Fragment>
            <p style={{ "font-size": "23px", color: "white" }}>
              Hare Krishna {subscribedName} ji, Thanks for subscribing. You will
              be added in our whatsapp group soon.
            </p>
            <br />
            <button
              onClick={this.cross}
              className="cross"
              style={{
                float: "right",
                color: "white",
                "background-color": "#ffbf43",
              }}
            >
              OK
            </button>
          </React.Fragment>
        </Modal>
        <section class="flat-row bg-theme pd-top-100 pd-bottom-94 authentication boda">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12" style={{ "margin-top": "-10px" }}>
                <div class="authen-text">
                  <a href="#">
                    <img src={Divine} alt="image" />
                    {/* <img  class="index2" src={qwe} alt="image" /> */}
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="col-sm-12 mido">
                  <div class="authen-title">
                    <div
                      class="sub-authen"
                      style={{
                        "font-size": "25px",
                        color: "brown",
                        "padding-bottom": "15px",
                        "padding-top": "60px",
                      }}
                    >
                      WELCOME TO
                    </div>
                    <div
                      class="title-text-authen newtext"
                      style={{
                        "font-size": "37px",
                        color: "black",
                        "padding-bottom": "40px",
                      }}
                    >
                      Divine Shiksha
                    </div>
                  </div>
                  <p
                    style={{
                      "padding-bottom": "40px",
                      "font-size": "20px",
                      "font-weight": "bold",
                      "line-height": "1.6",
                      color: "purple",
                      "text-align": "justify",
                      "text-justify": "inter-word",
                    }}
                  >
                    Divine Shiksha is a registered trust which is mainly working
                    for the mental health of the individuals of society by
                    inducing the divine knowledge of Srimad Bhagavad Gita. Today
                    people from all walks of life are going through a mental
                    stress due to which they are not able to attain the desired
                    peace and happiness. From the very childhood we have been
                    given the knowledge of attaining success in life but the
                    knowledge of how to become happy in every condition is
                    totally missing. The sublime knowledge of Bhagavad Gita is
                    the missing link which can complete our lives and help us in
                    overcoming all challenges. Divine Shiksha is rigorously
                    working to spread the non-sectarian vedic wisdom of Bhagavad
                    Gita in rural and urban areas. Divine Shiksha follows the
                    principles of Gaudiya Vaishnavism as bestowed by His Divine
                    Grace A.C. Bhaktivedant Swami Thakur Srila Prabhupada.
                  </p>
                </div>
                <div class="signature">
                  {/* <img src={signatu} alt="image" /> */}
                </div>
                {/* authen-text */}
              </div>
            </div>
            {/* row */}
            <div class="row">
              <div class="dividers h98"></div>
            </div>
          </div>
          <div class="container">
            <h1
              style={{
                "padding-bottom": "30px",
                "font-weight": "bold",
                color: "purple",
              }}
            >
              Follow us on:
            </h1>
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <a
                    href="https://www.facebook.com/Divine-Shiksha-102200091486191/"
                    target="_blank"
                    class="box-header"
                  >
                    <div class="boxicon">
                      <img
                        src={facebook}
                        alt="image"
                        style={{ width: "50px", "padding-bottom": "20px" }}
                      />
                    </div>
                    <div class="box-title">Facebook</div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <a
                    href="https://www.youtube.com/c/AtulyaNimaaiDas/"
                    target="_blank"
                    class="box-header"
                  >
                    <div class="boxicon">
                      <img
                        src={youtube}
                        alt="image"
                        style={{ width: "50px", "padding-bottom": "20px" }}
                      />
                    </div>
                    <div class="box-title">Youtube</div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <a
                    href="https://www.instagram.com/divine_shiksha/"
                    target="_blank"
                    class="box-header"
                  >
                    <div class="boxicon">
                      <img
                        src={instagram}
                        alt="image"
                        style={{ width: "50px", "padding-bottom": "20px" }}
                      />
                    </div>
                    <div class="box-title">Instagram</div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <a
                    href="https://twitter.com/AtulyaNimai"
                    target="_blank"
                    class="box-header"
                  >
                    <div class="boxicon">
                      <img
                        src={twitter}
                        alt="image"
                        style={{ width: "50px", "padding-bottom": "20px" }}
                      />
                    </div>
                    <div class="box-title">Twitter</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* container */}
        </section>

        {/* Popular-iconbox2 */}
        <section class="flat-row pd-top-93 ">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {/* <div class="title-section color-title">
                        <h1 class="title">POPULAR <span class="color-orange">COURSE</span> CATEGORIES</h1>
                        <div class="sub-title">
                            Having over 10 million students worldwide and more than 50.000 online courses available.
                        </div>
                    </div> */}
                <iframe
                  width="100%"
                  className="intro-vdo"
                  height="600px"
                  src="https://www.youtube.com/embed/nBQqOI8YVfg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              {/* col-md-12 */}
            </div>
            {/* row */}
            <div class="row">
              <div class="dividers h23"></div>
            </div>
          </div>
          {/* container */}
        </section>

        {/* why-choose-us */}
        <section class="flat-row bg-theme bodu">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="question-toggle">
                  <div class="title-section color-title left">
                    <h1 class="title">
                      WHY <span class="color-change">CHOOSE </span>US?
                    </h1>
                  </div>
                  <div class="flat-accordion">
                    <div class="flat-toggle act">
                      <h6
                        class="toggle-title active color-change"
                        style={{ color: "brown", "font-size": "20px" }}
                      >
                        {" "}
                        &#8226; We are among the very few who are working on
                        mental health through spiritual way.
                        <span></span>
                      </h6>
                      {/* <div class="toggle-content" >
                                            <p style={{"font-size": "18px"}}>We are among the very few who are working on mental health through spiritual way.</p>
                                        </div> */}
                    </div>
                    {/* flat-toggle */}
                    <div class="flat-toggle act ">
                      <h6
                        class="toggle-title color-change active"
                        style={{ color: "brown", "font-size": "20px" }}
                      >
                        &#8226; We can help you to achieve desired peace &amp;
                        happiness in life.
                        <span></span>
                      </h6>
                      {/* <div class="toggle-content">
                                            <p style={{"font-size": "18px"}}>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctorer aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa ipsum nec sagittis sem nibh id elit.</p>
                                        </div> */}
                    </div>
                    {/* flat-toggle */}
                    <div class="flat-toggle act">
                      <h6
                        class="toggle-title active color-change"
                        style={{ color: "brown", "font-size": "20px" }}
                      >
                        &#8226; Customized sessions on different topics can be
                        worked out.
                        <span></span>
                      </h6>
                      {/* <div class="toggle-content">
                                            <p style={{"font-size": "18px"}}>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctorer aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi lit consequa ipsum nec sagittis sem nibh id elit.</p>
                                        </div> */}
                    </div>
                    {/* flat-toggle */}
                  </div>
                  {/* flat-accordion */}
                </div>
                {/* question-toggle */}
              </div>
              {/* col-md-6 */}
              {/*that copied code will come here*/}
            </div>
          </div>
          {/* container */}
        </section>

        {/* flat-contact */}
        <section class="flat-row bg-theme flat-contact ">
          <div class="container"></div>
          {/* Container */}
          <div class="container">
            <div class="row"></div>
          </div>
          {/* Container */}

          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="subscribe-contact wrap-box pdfull">
                  <div class="title-section">
                    <h1 class="title">SUBSCRIBE TO JOIN OUR WHATSAPP GROUP</h1>
                    <div class="sub-title">
                      Subscribe now and receive all notification for any new
                      upcoming event, interesting posts and much more!
                    </div>
                  </div>
                  <form onSubmit={this.submitRequest}  id="newForm">
                    {/* <p class="subscribe-email"> */}
                      {/* <input type="text" id="emailsubscribe" name="name" style={{display: "inline"}} value="" onChange={(event) => setName(event.target.value)} required="required" placeholder="Your name here" /> */}
                      <input
                        type="text"
                        name="name"
                        id={name}
                        style={{ display: "inline" }}
                        onChange={(event) => this.handleChange(event, "name")}
                        placeholder="Your name here"
                        required
                      />
                      <input
                        type="text"
                        name="number"
                        id={number}
                        onChange={(event) => this.handleChange(event, "number")}
                        placeholder="Your mobile number here"
                        required
                      />
                      <input
                        type="text"
                        name="email"
                        id={email}
                        onChange={(event) => this.handleChange(event, "email")}
                        placeholder="Your emal-id here"
                      />
                      {/* <input type="email" id={email} style={{ margin: "10px", border: "none", width: "200px", height: "30px", "box-shadow": "2px 2px 8px grey"}} onChange={(event) => this.handleChange(event, 'email')} /> */}
                    {/* </p> */}

                    <button
                      class="flat-btn bg-color"
                      type="submit"
                      form="newForm"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
                {/* subscribe-contact */}
              </div>
              {/* Col-md-12 */}
            </div>
            {/* row */}
          </div>
          {/* Container */}
        </section>
        <a
          href="http://www.divineshiksha.com/donate"
          style={{
            position: "sticky",
            bottom: "0",
            right: "15px",
            float: "right",
            color: "purple",
          }}
          className="button-baaboo"
        >
          <button>DONATE</button>
        </a>
      </div>
    );
  }
}

export default Homes;
