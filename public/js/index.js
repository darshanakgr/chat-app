var socket = io();
socket.on('connect', function(){
  console.log('Connected to server');
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log("New Message", message );
});

socket.emit('createMessage', {
  from:'Andrew',
  text:"Hey! How are you?"
}, function(data) {
  console.log('From server :', data);
});
