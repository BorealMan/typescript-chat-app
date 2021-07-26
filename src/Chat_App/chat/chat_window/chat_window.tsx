/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './chat_window.css'
import Message_Template from './message_template/message_template'
import r_img from './default_images/r.png'
import sandwhich_img from './default_images/sandwhich.png'
import anonymous_img from './default_images/anon.jpg'
import anonymous2_img from './default_images/anon2.png'
import anonymous3_img from './default_images/anon3.jpg'

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
                <Message_Template img={r_img} name='Ryan' message="I just built an app!" timestamp='Friday July 23rd 10:59pm'/>
                <Message_Template img={sandwhich_img} name='SandWhich' message="Omg is this working??" timestamp="Friday July 23rd 11:04pm"/>
                <Message_Template img={anonymous_img} name='Frank' message="What's up brothers!" timestamp='Friday July 23rd 11:05pm'/>
                <Message_Template img={anonymous2_img} name='Agnus' message="Test data sure is a lot of typing" timestamp="Friday July 23rd 11:05pm"/>
                <Message_Template img={anonymous3_img} name='Penny' message="I wonder if anyone is going to use this thing" timestamp='Friday July 23rd 11:30pm'/>
                <Message_Template img={r_img} name='Ryan' message="What do you think?" timestamp='Friday July 23rd 11:30pm'/>
                <Message_Template img={sandwhich_img} name='Sandwhich' message="This app is awesome!" timestamp="Friday July 23rd 11:32pm"/>
                <Message_Template img={anonymous_img} name='Frank' message="Is this encrypted yet?" timestamp='Friday July 23rd 11:33pm'/>
                <Message_Template img={anonymous2_img} name='Agnus' message="Yeah this app is pretty cool." timestamp="Friday July 23rd 11:34pm"/>
                <Message_Template img={anonymous3_img} name='Penny' message="I'm still wondering if anyone is going to use this thing lol" timestamp='Friday July 23rd 11:36pm'/>
                <Message_Template img={anonymous3_img} name='Penny' message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.' timestamp='Friday July 23rd 11:36pm'/>
                <Message_Template img={r_img} name='Ryan' message="No Spamming!" timestamp='Friday July 23rd 11:37pm'/>
            </div>
            {/* <div className='chat-window-buttons'>
                <button onClick={ async () => get_messages() }>DB_TEST</button>
            </div> */}
        </div>
    );
};

export default Chat_Window;