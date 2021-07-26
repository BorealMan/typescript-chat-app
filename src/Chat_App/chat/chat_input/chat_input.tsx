import React from 'react'
import './chat_input.css'

const chat_input = () => {
    return (
        <div className='chat-input'>
            <textarea className="message-input" maxLength={240} autoFocus placeholder='Type here to enter your message...' wrap='hard'></textarea>
            <button className='send-message'>Send Message</button>
        </div>
    );
};

export default chat_input;
