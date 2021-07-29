import React from 'react'
import './chat.css'
import ChatWindow from './chat_window/chat_window'
import ChatInput from './chat_input/chat_input'

const Chat = () => {
    return (
    <div className='chat'>
        <ChatWindow />
        <ChatInput />
    </div>
    );
};

export default Chat;