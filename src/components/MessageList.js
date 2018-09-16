import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import Message from './Message'


export default class MessageList extends Component {
  static propTypes = {
    messageList: PropTypes.array
  }
  componentWillUpdate(){
    const node = ReactDom.findDOMNode(this)
    this.shouldScrollToBottom = (node.scrollTop+node.clientHeight+100)>=node.scrollHeight
  }
  componentDidUpdate(){
    // if(this.shouldComponentUpdate){
      // node.scrollTop = node.scrollHeight
    // }
  }
  render() {
    const {messageList,roomId} = this.props
    if(!roomId){
      return (
        <div className="message-list">
          <div className="join-room">
            &larr; Join a room!
          </div>
        </div>
      )
    }
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
