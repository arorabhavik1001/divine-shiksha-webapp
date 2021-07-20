import React from "react";
import axios from "axios";
import Modal from "react-modal";
import { db } from "../firebase";

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
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
      email: "",
      message: "",
      isModalOpen: false,
      subscribedName: "",
    };
  }
  cross = () => {
    this.setState({
      isModalOpen: false,
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };
  handleChange = (event, valueHandler) => {
    this.setState({
      [valueHandler]: event.target.value,
    });
  };
  handleClick = () => {
    const { name, number, email, message } = this.state;
    const details = {
      name,
      number,
      email,
      message,
    };
    axios({
      method: "POST",
      url: "http://65.1.69.127:5000/api/message",
      headers: { "Content-Type": "application/json" },
      data: details,
    })
      .then((result) => {
        this.setState({
          isModalOpen: true,
          subscribedName: result.data.name,
        });
        // alert(`Hare Krishna ${result.data.name} prabhuji, Thanks for subscribing. You will be added in our whatsapp group soon.`)
        console.log(result);
      })
      .catch((err) => {
        alert(`There was some problem. Pls try again later`);
        console.log(err);
      });
  };
  submitRequest = (event) => {
    event.preventDefault();
    this.setState({
      subscribedName: event.target.name.value,
    });
    db.collection("messages")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        message: event.target.message.value,
        time: new Date(),
      })
      .then((result) => this.setState({ isModalOpen: true }))
      .catch((err) => alert(err.message));

    document.getElementById("newForm").reset();
  };
  render() {
    const { name, number, subscribedName, isModalOpen, email, message } =
      this.state;
    return (
      <div>
        <section className="flat-row bg-theme pd-top-50 contact">
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-sm-12"
                style={{ "margin-left": "10px" }}
              >
                <form className="form-contact" onSubmit={this.submitRequest} id="newForm">
                  <div className="form-contact-title">
                    <h6
                      className="contact-title"
                      style={{
                        padding: "10px",
                        "font-size": "20px",
                        "background-color": "#ffbf43",
                        color: "white",
                        "font-weight": "bold",
                      }}
                    >
                      CONTACT US!
                    </h6>

                    <p
                      style={{
                        "font-size": "15px",
                        "padding-top": "10px",
                        "padding-bottom": "10px",
                        "font-weight": "bold",
                      }}
                    >
                      We are always ready to serve you
                      <br />
                      in any way possible.
                    </p>
                  </div>
                  
                  <div className="info-contact">
                    {/* <p className="wrap-input-name"> */}
                      {/* <input type="text" id="name" name="name" value="" tabindex="1" required="required" placeholder="Full Name" /> */}
                      <input
                        type="text"
                        className="ipnut"
                        id={name}
                        name="name"
                        style={{ display: "inline" }}
                        onChange={(event) => this.handleChange(event, "name")}
                        placeholder="Your name here"
                        
                      />
                    {/* </p> */}
                    {/* <p className="wrap-input-phone"> */}
                      {/* <input type="text" id="phone" name="phone" value="" tabindex="2" required="required" placeholder="Phone number" /> */}
                      <input
                        type="text"
                        className="ipnut"
                        id={number}
                        name="number"
                        onChange={(event) => this.handleChange(event, "number")}
                        placeholder="Your mobile number here"
                        required
                      />
                    {/* </p>
                    <p className="wrap-input-email"> */}
                      {/* <input type="text" id="email" name="email" value="" tabindex="3" required="required" placeholder="Email-address" /> */}
                      <input
                        type="text"
                        className="ipnut"
                        name="email"
                        id={email}
                        onChange={(event) => this.handleChange(event, "email")}
                        placeholder="Your emal-id here"
                      />
                    {/* </p>
                    <p className="wrap-input-messages"> */}
                      <textarea
                        id="messages-contact"
                        id={message}
                        name="message"
                        tabindex="4"
                        onChange={(event) =>
                          this.handleChange(event, "message")
                        }
                        placeholder="Messages"
                        required
                      ></textarea>
                      {/* <input type="text"  style={{display: "inline"}}  placeholder="Your name here" /> */}
                    {/* </p> */}

                    <button
                      className="flat-btn bg-color"
                      style={{ "margin-bottom": "40px" }}
                      type="submit"
                      form="newForm"
                    >
                      SUBMIT FORM
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-7 col-sm-12">
                <div className="wrap-maps">
                  <div id="flat-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.065247059865!2d75.80158596609638!3d26.933145933118762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e4358ae52f%3A0x75001ef8632021c9!2sSubhash%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1612633457083!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal isOpen={isModalOpen} style={stylesByBhavik}>
          <React.Fragment>
            <p style={{ "font-size": "23px", color: "white" }}>
              Hare Krishna {subscribedName} ji, Thanks for contacting us. Your
              query has been received and we will get back to you shortly, pls
              watch out for any reply on your whatsapp.
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
      </div>
    );
  }
}

export default Contact;
