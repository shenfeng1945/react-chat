import React, { Component } from 'react'

export default class SendMessageForm extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.sendMessage(this.state.text)
    this.setState({text: ''})
  }
  render() {
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit.bind(this)}>
        <input 
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          placeholder="Type your message and hit 'Enter'" 
          type="text"/>
      </form>
    )
  }
}
