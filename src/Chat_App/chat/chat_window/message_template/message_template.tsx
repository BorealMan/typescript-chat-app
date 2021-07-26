import React, {useEffect, useRef} from 'react'
import './message_template.css'

let count = 0;

const Message_Template = (props: any) => {
    count += 0.5

    const messageRef: any = useRef(null);
    
    const scrollToBottom = () => {
        messageRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom);

    return (
        <div className='message-template'>
            <img src={props.img} className='user-icon' alt='Icon to identify users' />
            <div className='message-package'>
                <p className='user-name'>{props.name}</p>
                <p className='message-text'>{props.message}</p>
                <small className='time-stamp'>{props.timestamp}</small>
            </div>
            <div ref={messageRef}></div>
        </div>
    );
};

export default Message_Template;