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
    const [messageList, set_messageList] = useState([<Message_Template img={portraits[0]} id={"init"} name={"Admin"} message={"Started a new server, have fun =)"} timestamp={"The beginning of time"}/>]);
    // Get Message History 
    useEffect(() => {
        Socket.on("message-history", data => {
            if(data == []){
                Socket.emit("send-message", {name: "Admin", message:"Welcome to the server!"})
            }
            let lpl: any = []
            // console.log(data)
            for(let i = 0; i < data.length; i++){
                lpl.push(<Message_Template img={portraits[data[i].img_index]} id={data[i].id} name={data[i].name} message={data[i].message} timestamp={data[i].date_time}/>)
            }
            set_messageList(messageList.concat(lpl));
            //console.log((messageList: any) => messageList.concat(lpl))
        });
        Socket.on("update-messages", (data: any) => {
            //console.log(data)
            let new_message = <Message_Template id={data[0].id} img={portraits[data[0].img_index]} name={data[0].name} message={data[0].message} timestamp={data[0].date_time}/>
            set_messageList(messageList => messageList.concat(new_message))
            //console.log(messageList)
        })
    }, []);

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