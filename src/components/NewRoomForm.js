import React, { Component } from 'react'

export default class NewRoomForm extends Component {
  constructor(){
    super()
    this.state = {
      roomName: ''
    }
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({roomName:''})
  }
  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" 
              value={this.state.roomName}
              onChange={(e)=>this.setState({roomName:e.target.value})}
              placeholder="Create a room"/>
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}
