/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react'
import Socket from '../socket'
import './chat_window.css'
import Message_Template from './message_template/message_template'
import r_img from './default_images/r.png'
import sandwhich_img from './default_images/sandwhich.png'
import anonymous_img from './default_images/anon.jpg'
import anonymous2_img from './default_images/anon2.png'
import anonymous3_img from './default_images/anon3.jpg'
import king_img from './default_images/king.jpg'

const portraits = [king_img, r_img, sandwhich_img, anonymous_img, anonymous2_img, anonymous3_img];

const Chat_Window = () => {
    // Starting Message
    // TODO Configure this to show up conditionally
    const [messageList, set_messageList] = useState([<Message_Template img={portraits[0]} name={"Admin"} message={"Started a new server, have fun =)"} timestamp={"The beginning of time"}/>]);
    // Get Message History 
    useEffect(() => {
        Socket.on("message-history", data => {
            let lpl = []
            for(let i = 0; i < data.length; i++){
                lpl.push(<Message_Template img={portraits[2]} name={data[i].name} message={data[i].message} timestamp={"Just Now"}/>)
            }
            set_messageList(messageList.concat(lpl))
        });
    }, []);
    // Update Messages on input
    useEffect(() => {
        Socket.on("update-messages", (data: any) => {
            console.log("I recieved the broadcast!")
        })
    }, [])

    return (
        <div className='chat-window'>
            <div className='messages'>
                {   
                    messageList.map( (obj: any) => {
                        return obj
                    })
                }
            </div>
        </div>
    );
};

export default Chat_Window;