import React, { useState } from 'react'
import Socket from '../socket'
import './chat_input.css'



const Chat_Input = () => {

    const [Input, setInput] = useState("");

    const Send_Message = (message: string) => {
        if(message != "" && message != "test"){
            console.log(`Sending message: ${message}`)
            Socket.emit("send-message", message)
            setInput(""); 
        }
        else {
            console.log("Error sending message, check input.")
        }
    }

    const handleInput = (text: any) => {
        setInput(text)
    }

    return (
        <div className='chat-input'>
                <textarea className="message-input" value={Input} onChange={(event) => handleInput(event.target.value)} maxLength={240} autoFocus required placeholder='Type here to enter your message...' wrap='hard'></textarea>
                <button type='submit' onSubmit={() => Send_Message(Input)} onClick={() => Send_Message(Input)} className='send-message'>Send Message</button>
        </div>
    );
};

export default Chat_Input;
