import React from 'react';
import './chat_app.css'
import Users from './users/users';
import Chat from './chat/chat';
import Header from './header/header';
import Rooms from './rooms/rooms';

const Chat_App: any = () => {
    return (
        <div>
            <Header />
            <div className="functional-container">
                <Rooms />
                <Chat />
                <Users />
            </div>

        </div>
    );
}

export default Chat_App
