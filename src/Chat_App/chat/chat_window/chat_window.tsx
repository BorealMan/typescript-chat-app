import React, { useState} from 'react'
import './chat_window.css'

let message_lines_in_window = 20
let ran = false

const get_messages = async () => {
    let res = await fetch('http://localhost:4000/get-all-messages');
    let body = await res.json();
    console.log(body.result)
    
    return (
        <div className='message-holder'>

        </div>
    )
}

const initiate_chat = (n: number) => {
    let list = new Array(n)
    for(let i=0; i<n; i++){
        list[i] =<div className='message-holder'>.</div> 
    }
    console.log("initating chat")
    return list
}

const Chat_Window =  () => {

    const [chat_messages, set_messages] = useState(new Array(30));

    return (
        <div className='chat-window'>

            <div className='messages'>
                { chat_messages }
            </div>
            <div className='chat-window-buttons'>
                {/* <button onClick={ async () => get_messages() }>DB_TEST</button>
                <button onClick={ async () => {set_messages(initiate_chat(message_lines_in_window))} }>Broken Button</button>
                <button onClick={async () => {}}>DB_Thing</button> */}
            </div>

        </div>
    );
};

export default Chat_Window;