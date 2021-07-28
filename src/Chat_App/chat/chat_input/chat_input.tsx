import React, { useState } from 'react'
import Socket from '../socket'
import './chat_input.css'



const Chat_Input = () => {

    const [Input, setInput] = useState("Test");

    const Send_Message = (message: string) => {
        console.log("Does this work?")
        Socket.emit("event", message)
    }

    const handleInput = (event: any) => {
        setInput(event.target.value)
        console.log(Input)
    }

    return (
        <div className='chat-input'>
            <textarea className="message-input" maxLength={240} autoFocus placeholder='Type here to enter your message...' onChange={() => {}} wrap='hard'></textarea>
            <button type='submit' onClick={() => Send_Message(Input)} className='send-message'>Send Message</button>
        </div>
    );
};

export default Chat_Input;
