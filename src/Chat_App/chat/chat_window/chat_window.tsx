import React from 'react'
import './chat_window.css'

let message = "Hello There "

const Chat_Window = () => {
    return (
        <div className='chat-window'>
            <p>{ message }</p>
        </div>
    );
};

export default Chat_Window;