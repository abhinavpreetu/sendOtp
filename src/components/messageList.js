import React, { Component } from "react";

class MessageList extends Component {
    constructor() {
        super();
        this.state = {
            messageList: []
        }
        this.listView = this.listView.bind(this);
    }

    listView() {
        const { messageList } = this.state;
        const listOfMessages = messageList.map(({ name, otp, time }, index) => {
            return (
                <div className='sentMessage' key={index}>
                    <p>
                        <span className='lable'>name: </span>
                        <span className='data'>{name}</span>
                    </p>
                    <p>
                        <span className='lable'>OTP: </span>
                        <span className='data'>{otp}</span>
                    </p>
                    <p>
                        <span className='lable'>time: </span>
                        <span className='data'>{time}</span>
                    </p>
                </div>
            )
        })
        return (
            <React.Fragment>
                {listOfMessages}
            </React.Fragment>
        )
    }

    render() {   
        if(this.state.messageList.length) {
            return (
                <div>
                    {this.listView()}
                </div>
            )
        } else {
            return (
                <p>no messages sent</p>
            )
        }
    }
    
    componentWillMount() {
        this.setState({ messageList : JSON.parse(getMessageFromLocalStorage()) })
    }
}


const getMessageFromLocalStorage = () => {
    const messageList = localStorage.getItem('messageList');
    return messageList ? messageList : [];
}

export default MessageList;