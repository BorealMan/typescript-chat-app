/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './chat_window.css'
import Message_Template from './message_template/message_template'


const get_messages = async () => {
    let res = await fetch('http://localhost:4000/get-all-messages');
    let body = await res.json();
    console.log(body.result)
    
    return (
        <div className='message-holder'>

        </div>
    )
}

const Chat_Window = () => {
    return (
        <div className='chat-window'>

            <div className='messages'>
                <Message_Template />
            </div>
            {/* <div className='chat-window-buttons'>
                <button onClick={ async () => get_messages() }>DB_TEST</button>
            </div> */}
        </div>
    );
};

export default Chat_Window;