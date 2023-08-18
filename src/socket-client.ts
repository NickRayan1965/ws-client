import { Manager } from 'socket.io-client';
export const connectToServer = () => {
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyMzA0NTI1LCJleHAiOjE2OTIzOTA5MjV9.a9SUQbd1k_AJc5xuNB9mVSwBJr9W9UTFm3MkkW8a2sg';
  const manager = new Manager('http://localhost:3000/socket.io/socket.io.js', {
    extraHeaders: {
      authorization: jwt,
    },
  });
  //with headers autorization
  const socket = manager.socket('/messages');
  try {
    const a = socket.emit('assing-report', {
      orderReport: 0,
    });
    //imprimir lo emitido
    console.log(a);
    socket.on('exception', (data) => {
      console.log(data);
    });

  } catch (error: any) {
    console.log(error.message);
  }
};
