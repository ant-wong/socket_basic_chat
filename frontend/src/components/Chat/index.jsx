import React, { Component } from 'react'

class Chat extends Component {
  
  render() {

    let msgJSX = this.props.messages.map((msg) => {
      return <div>{msg.user}: {msg.msg}</div>
    })

    const styles = {
      noMargin: {
        padding: 0,
      },
      header: {
        padding: '4% 0%',
        background: '#009688'
      },
      globalChat: {
        padding: '10%'
      },
      inputForm: {
        padding: '1.3%'
      },
      enterButton: {
        fontSize: '2em',
        background: '#009688'
      }
    }
    
    return (
      <div>
        <div className="container-fluid" style={styles.noMargin}>
            <h1 style={styles.header}>Pls only talk about food. <small>I will ban you if you don't</small></h1>
        </div>
        <hr/>
        <div className="container">
          <div className="messages" style={styles.globalChat}>
            {msgJSX}
          </div>
        </div>
        <hr/>
        <div className="container">
          <form action="">
            <div className="form-group">
              <input type="text" 
                     name="username"
                     className="form-control" 
                     placeholder="Username" 
                     value={this.props.username}
                     onChange={this.props.userHandler}
                     style={styles.inputForm} />
            </div>
            <div className="form-group">
              <input type="text" 
                     name="message"
                     className="form-control" 
                     placeholder="Text" 
                     value={this.props.password}
                     onChange={this.props.msgHandler}
                     style={styles.inputForm} />
            </div>
            <button type="submit" 
                    className="btn btn-default btn-block" 
                    style={styles.enterButton}
                    onClick={this.props.sendMsg}
                    ><span role="img"> ❤️ </span></button>
          </form>
        </div>
      </div>
    )
  }
}

export default Chat