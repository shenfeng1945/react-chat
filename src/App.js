import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import { instanceLocator, tokenUrl } from './config'
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'

class App extends Component {
   constructor(){
     super()
     this.state = {
       roomId: null,
       messageList: [],
       joinableRooms: [],
       joinedRooms: []
     }
   }
   
  componentDidMount() {
    // 初始化chatkit
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "shenfeng",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });
    // 连接
    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(error => {console.error("error:", error)});
  }
  getRooms(){
    this.currentUser.getJoinableRooms()
    .then(joinableRooms =>{
      this.setState({
        joinableRooms,   //可加入的
        joinedRooms: this.currentUser.rooms   // 已经加入过的
      })
    })
   .catch(error => {console.error("error:", error)});
  }
  subscribeToRoom(roomId){
    // 加入房间
    this.setState({messageList:[]})
    this.currentUser.subscribeToRoom({
      roomId,
      messageLimit: 20,
      hooks: {
        onNewMessage: message => {
           this.setState({
             messageList: [...this.state.messageList,message]
           })
        }
      }
    })
    .then(room=>{
      this.setState({roomId: room.id})
      this.getRooms()   // 可加入和已加入的rooms发生了改变
    })   
    .catch(err=>{console.log('error on subscribing to a room ',err)})
  }
  sendMessage(text){
     this.currentUser.sendMessage({text,roomId: this.currentUser.rooms[0].id,})
  }

  render() {
    return (
      <div className="app">
        <RoomList rooms={[...this.state.joinableRooms,...this.state.joinedRooms]}
                  roomId={this.state.roomId}
                  subscribeToRoom={this.subscribeToRoom.bind(this)}/>
        <MessageList messageList={this.state.messageList} roomId={this.state.roomId}/>
        <SendMessageForm sendMessage={this.sendMessage.bind(this)}/>
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
