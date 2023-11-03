import React from 'react';
import './Message.css'
// Importing Components and css Styling

const Message = ({new_msg_history}) =>{ // Message Component
    const elem = new_msg_history.map((comm) => {
        const name = comm.side? 'User 1': 'User 2' // Deciding  Username by side value
        const side = comm.side? 'answer right': 'answer left' // deciding style by side value
        return (
     <div className={side} key={comm.ind}>
        <div className="name">{name}</div>
        <div className="text"><text>{comm.text}</text></div>
        <div className="time">{comm.date}</div>
    </div>
        )
    })
    return (<div>{elem}</div>)
}


export {Message}