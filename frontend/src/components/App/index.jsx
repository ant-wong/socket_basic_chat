import React, { Component } from 'react';
import Chat from '../Chat'

import io from 'socket.io-client'


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      msg: '',
      messages: []
    }
    this.socket = io('localhost:6060')

    this.socket.on('RECEIVE_MESSAGE', (data) => {
      addMsg(data)
    })

    const addMsg = (data) => {
      console.log(data)
      this.setState({
        messages: [...this.state.messages, data]
      })
      console.log(this.state.messages)
    }

  }
  

  // FUNCTIONS
  userHandler = (ev) => {
    this.setState({
      username: ev.target.value,
    })
  }
  
  msgHandler = (ev) => {
    this.setState({
      msg: ev.target.value
    })
  }

  sendMsg = (ev) => {
    ev.preventDefault()
    this.socket.emit('SEND_MESSAGE', {
      user: this.state.username,
      msg: this.state.msg
    })  
    this.setState({

    })
    console.log(ev.target)
  }

  render() {

    const styles = {
      app: {
        textAlign: 'center',
        fontFamily: "'Merienda', cursive",
      }
    }

    return (
      <div className="App" style={styles.app}>
        <Chat username={this.state.username}
              msg={this.state.msg}
              messages={this.state.messages}
              userHandler={this.userHandler}
              msgHandler={this.msgHandler}
              sendMsg={this.sendMsg}/>
      </div>
    );
  }
}

export default App;
