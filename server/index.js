const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const app = express();
app.use(bodyparser.json());
app.use(cors());
const server = require('http').createServer(app);
const io = socketio(server, {cors : true});
const chatController = require('./controllers/chat.controller');


io.on('connect' , (socket) => {
    
    socket.on('adduser' , ({name,room},callback) => {
        let userRoom = room.trim().toLowerCase();
        socket.join(userRoom);
      const error =  chatController.addUser(name,userRoom,socket.id);
      if(error){
          callback(error)
      }
        //welcome message to the user
        socket.emit('message' , {user :'admin' , text : `welcome to the chat ${name}`});
        //some user message joined message to others
        socket.broadcast.to(userRoom).emit('message', {user : 'admin' , text : `${name} has joined the chat`});
    })
  
    socket.on('sendmessage' , (message ,callback) => {
        const user = chatController.getUser(socket.id);
        io.to(user.userRoom).emit('message' , {user : user.userName , text : message});
        callback();
    })
    socket.on('disconnect' , () => {
        chatController.removeUser(socket.id)
        console.log(`disconnected ${socket.id}`)
    })
})

//Routes
const wordToPdfRoutes = require('./routes/wordToAll.route');
//apis
app.use('/api/convert',wordToPdfRoutes);


server.listen(5000 , () => {
    console.log('listening on port 5000')
})