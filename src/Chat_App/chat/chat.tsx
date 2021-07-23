import React from 'react'
import './chat.css'
import Chat_Window from './chat_window/chat_window'
import Chat_Input from './chat_input/chat_input'

const Chat = () => {
    return (
    <div className='chat'>
        <Chat_Window />
        <Chat_Input />
    </div>
    );
};

export default Chat;