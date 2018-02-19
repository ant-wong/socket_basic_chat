const express = require('express')
      http = require('http')
      socket = require('socket.io')
      app = express()

const server = http.createServer(app)

const io = socket(server)


io.on('connection', (socket) => {
  console.log(socket.id)
  console.log('User connected')

  socket.on('SEND_MESSAGE', (data) => {
    io.emit('RECEIVE_MESSAGE', data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen(6060, () => {
  console.log('Listening on port 6060')
})




// io.on('connection', socket => {
//   console.log('User connected')

//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })
// })
