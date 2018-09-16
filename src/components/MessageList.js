import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'


export default class MessageList extends Component {
  static propTypes = {
    messageList: PropTypes.array
  }
  render() {
    const {messageList} = this.props
    return (
      <div className="message-list">
        {messageList.map(message=>{
          return (
            <Message key={message.id} message={message}></Message>
          )
        })}
      </div>
    )
  }
}
