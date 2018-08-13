import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/styles.css';

class SendMessage extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
        this.messageView = this.messageView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    messageView() {
        const { phone } = this.props.selectedContact;
        return (
            <React.Fragment>
                <p className='lable'>Phone Number: <span className='data'>{phone}</span></p>
                <div>
                    <input type="text" 
                        value={this.state.message} 
                        className='input-box'
                        onChange={this.handleChange}
                        placeholder="enter text to be sent"/>
                    <button className='send' onClick={this.sendMessage}>send OTP</button>
                </div>
            </React.Fragment>
        )
    }
    
    handleChange(event) {
        this.setState({ message: event.target.value })
    }

    sendMessage() {
        const payload = {
            from: 'abhinav preetu',
            to: 918074757641,
            text: this.state.message.concat(fixedMessage)
        };
        axios({
            url: 'https://nexmo-send-sms.herokuapp.com/sendSMS',
            data: payload,
            method: 'POST'
        })
        .then(() => {
            const { firstName, lastName } = this.props.selectedContact;
            saveMessages({
                name: `${firstName} ${lastName}`,
                time: new Date().toLocaleString('en-US', { 
                    month: 'short', 
                    year: 'numeric', 
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                }) ,
                otp
            })
            alert('Message sent successfully.');
        })
        .catch(err => alert('Some error sending the message. Please try again.'));
    }

    render() {   
        const { selectedContact : contact } = this.props;
        if(contact.hasOwnProperty('phone')) {
            return (
                <div className='details'>
                    {this.messageView()}
                </div>
            )
        } else {
            return (
                <p>no phone number for this person</p>
            )
        }
    }
}


const messageOtop = () => {
    otp = randomOtp();
    return `Hi. Your OTP is ${otp}`
}

const randomOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

let otp = '';
let fixedMessage = messageOtop();

const saveMessages = data => {
    if(data) {
        let listOfMessages = localStorage.getItem('messageList');
        listOfMessages = listOfMessages ? JSON.parse(listOfMessages) : [];
        listOfMessages.push(data);
        localStorage.setItem('messageList', JSON.stringify(listOfMessages));
    }
}

SendMessage.propTypes = {
    selectedContact: PropTypes.object
}

export default SendMessage;