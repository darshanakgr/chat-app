const message = require('./util/message');

class MessageSocket{
  constructor(io, socket){
    console.log('New user connected');

    socket.emit('newMessage', message.generateMessage("Admin", "Welcome to th chat app"));

    socket.broadcast.emit('newMessage', message.generateMessage("Admin", "New User connected"));

    socket.on('disconnect', () => {
      console.log("User was disconnected");
    });

    socket.on('createMessage', (messageBody, callback) => {
      console.log('New Message :', messageBody);
      io.emit('newMessage', message.generateMessage(messageBody.from, messageBody.text));
      callback('Your message was broadcasted');
    });
  }
}

module.exports.MessageSocket = MessageSocket;
