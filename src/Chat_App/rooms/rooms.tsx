import React from 'react'
import './rooms.css'

const rooms = () => {
    return (
        <div className='rooms'>
            <h2 className="room-title">Rooms: </h2>
            <div className='room-container'>
                <div className='room-display'>Fishing Talk</div>
                <div className='room-display'>Tree Watching</div>
            </div>

        </div>
    )
}

export default rooms
