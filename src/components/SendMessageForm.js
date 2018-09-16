import React, { Component } from 'react'

export default class SendMessageForm extends Component {
  render() {
    return (
      <form className="send-message-form">
        <input 
          placeholder="Type your message and hit 'Enter'" 
          type="text"/>
      </form>
    )
  }
}
