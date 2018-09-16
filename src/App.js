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
       messageList: [],
       message: {}
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
        currentUser.subscribeToRoom({
          roomId: currentUser.rooms[0].id,
          messageLimit: 20,
          hooks: {
            onNewMessage: message => {
               this.setState({
                 messageList: [...this.state.messageList,message]
               })
            }
          }
        });
      })
      .catch(error => {
        console.error("error:", error);
      });
  }
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messageList={this.state.messageList}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
