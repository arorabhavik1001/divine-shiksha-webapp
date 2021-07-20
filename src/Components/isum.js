import React from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import poster from '../images/poster.jpeg'
import landscape from '../images/landscape.png'
import newposter from '../images/newposter.png'
import happy from '../images/happy.png'
import rsc from '../images/rsc.png'
import India from '../images/India.png'
import bhim from '../images/iconbox/bhim.png'
import gpay from '../images/iconbox/gpay.png'
import gpay1 from '../images/iconbox/gpay1.png'
import paytm from '../images/iconbox/paytm.png'
import newp from '../images/newp.jpeg'

const stylesByBhavik = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-40%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#22272b',
        border: '2px solid gray',
        textAlign: 'center',
        borderRadius: "20px",
        boxShadow: '2px 2px 8px gray',
    }
}
class Ieminar extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            name: '', 
            number: 0,
            subscribedName: '',
            email: '',
            address: '',
		profesion: '',
		payparam: {},
        }
    
    }
	componentDidMount(){
	this.setState({
		number: 0
	})
	}
    handleChange = (event, valueHandler) => {
        this.setState({
            [valueHandler]: event.target.value
        })
    }
    cross= () => {
        this.setState({
            isModalOpen: false,
        })
    }
    handleClick = () => {
var i=0;
	    while(i<1){
	    if(this.state.number === 0){
		 alert(`Please enter your mobile number first`)
		 return;
	 }
	i++
}
        const {name, number, isModalOpen, email, address, profesion} = this.state;
	
        const newReg = {
            name,
            number,
            email,
            address,
		profesion,
        }
        axios({
            method: 'POST',
            url: 'https://bhavikprojects.tech/pay',
            headers: { 'Content-Type': 'application/json' },
            data: newReg
        }).then(result => {
            this.setState({
                isModalOpen: true,
                subscribedName: result.data.name,
                name: '',
                number: '',
                email: '',
                address: '',
		    profesion: '',
            })
            // alert(`Hare Krishna ${result.data.name} prabhuji, Thanks for subscribing. You will be added in our whatsapp group soon.`)
            console.log(result)
        }).catch(err => {
            alert(`There was some problem. Pls try again later`)
            console.log(err)
        })
	
    }

getPaymentData = (data) => {
        return fetch(`https://bhavikprojects.tech/paynow`, {
            method: 'POST',
            headers: { Accept: 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json()
		console.log(response.json())
        }
        ).catch(error => {
            console.log(error)
        })
    }
getaPaymentData = (data) => {
        return axios({
            method: 'POST',
		url:`https://bhavikprojects.tech/paynow`,
            headers: { Accept: 'application/json',
                'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        }).then(response => {
           // return response
		this.setState({payparam:response.data.response})
		console.log(response.data.response)
        }
        ).catch(error => {
            console.log(error)
        })
    }

obj = (paramValue) => {
        return typeof paramValue === 'object'
    }
Date = (paramValue) => {
        return Object.prototype.toString.call(paramValue) === '[object Date]'
    }
    
    stringifyThisParam = (params) => {
        if(this.obj(params)&& !this.Date(params)){
            return JSON.stringify(params)
        }else{
            return params
        }
    }

formBuilder = (details) => {
        const {action, params} = details
        const form = document.createElement('form');
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', this.stringifyThisParam(params[key]));
            form.appendChild(input);
        })

        return form;
    }

takeToPaymentGateway = (details) => {
        const form  = this.formBuilder(details);
        document.body.appendChild(form);
        form.submit();
        form.remove();
    }


order = (event) => {
        this.getPaymentData({
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
		address: this.state.address,
		profesion: this.state.profesion,
        }).then(result =>{
		console.log(result)
            var info = {
                action: 'https://securegw.paytm.in/order/process',
                params: result.response
            }
            this.takeToPaymentGateway(info)
        }).catch(error =>{
            console.log(error)
        })
    }


    render() {
        const { name, profesion, number, subscribedName, isModalOpen, email, address} = this.state;
        return (
<div className="container">
		 <Modal isOpen={isModalOpen} style={stylesByBhavik}>
                            <React.Fragment>
                            <p style={{"font-size":"23px", color:'white', "line-height":"1.6"}}>Hare Krishna {subscribedName} ji, Thanks for showing interest in Vedic Pathshala - a Summer Camp. We have succesfully received your registeration request. But the registeration is not complete yet. Our payment gateway is under integration. Please contact Atulya Nimaai Das @ 9929369844 to submit your donation and hence complete your registeration. We are sorry for any inconvenience.</p>
                                <br />
                                <button onClick={this.cross} className="cross" style={{"float": 'right', color:'white', "background-color": '#ffbf43'}}>OK</button>
                            </React.Fragment>
                </Modal>
                <h1 style={{"text-align": "center", "margin-bottom": "50px", "text-decoration": "underline"}}>Vedic Pathashala - a Summer Camp</h1>
                <img src={newp} alt="image" className="p-image"/>
                <p style={{ "text-align": "center", "margin-top": "50px","margin-left":"10px", "margin-right": "10px",  "margin-bottom": "50px", "font-size": "20px", "line-height":"1.7", 'text-justify':'inter-word', 'text-align':'justify'}}><span style={{ "font-weight": "bold", color:"orange"}}>This summer, a golden opportunity is knocking at your doorstep! </span><br /> A chance to empower children in a well-planned online summer camp, which is full of Vedic and cultural activities.<br />
    
                Dates: 25th May to 5th June. (12 Days)
    
                    <br /><br /><span style={{ "font-weight": "bold", "font-size": "30px", color:'orange'}} class="topicana">Topics covered:</span> <br />
                      
                                          <div className="seminar-flex row"style={{"padding-top": "15px", "padding-bottom": "20px", "line-height":"1.7", "justify-content":"center", "font-weight":"500"}}>
                            <div class="col-sm-12 col-md-6">
                            &bull; 11 most important slokas of Bhagavad Gita<br />
                            &#8226; Recitation and Meaning of the slokas<br />
                            &#8226; Value education lessons from Vedic stories<br />
                            </div>
                            <div class="col-sm-12 col-md-6"> &#8226; Sonic meditation for small kids for better concentration<br />
                           
                                &bull; Special session on Vedic arts<br />
                            </div><br /><br />
                            Donation: Rs.600 per participant
                        </div>
                    </p>
                    <div class="container">
                    <div class="row shadow">
                        <div class="col-md-12">
                            <div class="subscribe-contact wrap-box pdfull">
                                <div class="title-section">
                                    <h1 class="title">Register for the Seminar</h1>
                                    <div class="sub-title">
                                        Please follow the below given steps in order to register for the seminar.
                                    </div>
                                </div> 
                                {/* <form action="./contact/contact-process.php" method="post" id="formsubscribe" class="formsearch search-course"> */}
	     <p class="subscribe-email" style={{"font-size":"25px", "line-height":"1.6"}}>
                                        {/* <input type="text" id="emailsubscribe" name="name" style={{display: "inline"}} value="" onChange={(event) => setName(event.target.value)} required="required" placeholder="Your name here" /> */}
	    {/*    <input type="text" id={name} style={{display: "inline"}} onChange={(event) => this.handleChange(event, 'name')} placeholder="Name here" />
                                       <input type="text" id={number} onChange={(event) => this.handleChange(event, 'number')} placeholder="Mobile number here" />
                                        <input type="text" id={email} onChange={(event) => this.handleChange(event, 'email')} placeholder="Emal-id here" />
               
	      <input type="text" id={address} onChange={(event) => this.handleChange(event, 'address')} placeholder="Address here" />
	      */}
		    {/*  <input type="text" id={profesion} style={{ margin: "10px", border: "none", width: "200px", height: "30px", "box-shadow": "2px 2px 8px grey"}} onChange={(event) => this.handleChange(event, 'profesion')} placeholder="Your profession here"/>
                       */}         {/*       <input type="text" id={profesion} onChange={(event) => this.handleChange(event, 'profesion')} placeholder="Parents' profession here" />*/}
                  <span className="title" style={{"font-weight":"500"}}>Step 1</span> - Fill in your details in this <a href="https://forms.gle/f3sznbG4hGxV5rzW7" target="_blank" style={{color:"orange", "text-decoration":"underline"}}>form</a>.<br />
			<span className="title" style={{"font-weight":"500"}}>Step 2</span> - Please submit your donation at this <a href="https://paytm.me/OV4-ZYW" target="_blank" style={{color:"#002E6E", "text-decoration":"underline"}}>Payment Link</a>.<br />

       		   <span className="title" style={{"font-weight":"500"}}>Step 3</span> - Please contact Atulya Nimaai Das @ 9929369844 for confirmation.
		    </p>
                                   
                                   
	    {/* <button class="flat-btn bg-color" onClick={this.handleClick}>Register Now</button> */}
                                   
                                   
                                {/* </form> */}
                            </div>{/* subscribe-contact */}
                        </div>{/* Col-md-12 */}
                    </div>{/* row */}
                </div>{/* Container */}
            </div>
        )
    }
}

export default Ieminar;
