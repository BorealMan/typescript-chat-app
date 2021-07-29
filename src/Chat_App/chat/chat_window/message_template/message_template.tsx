import React, {useEffect, useRef} from 'react'
import { format_epochTime } from '../../../utility/time'
import './message_template.css'

const Message_Template = (props: any) => {
    const messageRef: any = useRef(null);
    
    const scrollToBottom = () => {
        messageRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom);
    const ts = format_epochTime(props.timestamp)
    return (
        <div>
            <div ref={messageRef} className='message-template'>
            <img src={props.img} className='user-icon' alt='Icon to identify users' />
            <div className='message-package' key={props.id}>
                <p className='user-name'>{props.name}</p>
                <p className='message-text'>{props.message}</p>
                <small className='time-stamp'>{ts}</small>
            </div>
        </div>
        <div className='message-border' ></div>
        </div>
    );
};

export default Message_Template;