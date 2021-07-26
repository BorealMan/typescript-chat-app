import React from 'react'
import './message_template.css'
import r_img from './default_images/r.png'

const message_template = () => {
    return (
        <div className='message-template'>
            <img src={r_img} className='user-icon' alt='Icon to identify users' />
            <div className='message-package'>
                <p className='user-name'>Ryan</p>
                <p className='message-text'>Testing my message.</p>
                <small className='time-stamp'>Thursday July 27th 9:30pm</small>
            </div>
        </div>
    );
};

export default message_template;