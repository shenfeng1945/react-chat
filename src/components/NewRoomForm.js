import React, { Component } from 'react'

export default class NewRoomForm extends Component {
  render() {
    return (
      <div className="new-room-form">
        <form>
          <input type="text" placeholder="Create a room"/>
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}
