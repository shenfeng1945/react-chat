import React from 'react'

function Message(props){
    const {senderId,text} = props.message
    return (
      <div className="message">
         <div className="message-username">{senderId}</div>
         <div className="message-text">{text}</div>
      </div>
    )
}
export default Message