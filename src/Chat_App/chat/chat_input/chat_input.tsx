import React from 'react'
import './chat_input.css'

const chat_input = () => {
    return (
        <div className='chat-input'>
            <input className="message-input"></input>
            <button className='send-message'>Send Message</button>
        </div>
    );
};

export default chat_input;
