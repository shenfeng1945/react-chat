import React, { Component } from 'react'

export default class RoomList extends Component {
  render() {
    const {rooms,roomId} = this.props
    return (
      <ul className="rooms-list">
         <h3>Your rooms</h3>
        {rooms.map(item=>{
          const active = roomId === item.id?'active':'';
          return (
            <li key={item.id}
                className={`room ${active}`}
                style={{cursor:'pointer'}}
                onClick={()=>this.props.subscribeToRoom(item.id)} 
              >{item.name}</li>
          )
        })}
      </ul>
    )
  }
}
