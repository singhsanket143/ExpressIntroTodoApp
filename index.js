const express = require('express'); // we got access to express function

const app = express(); // app is a new express application object

const PORT = 3000;

// Let's define some routes

app.get('/ping', (request, response) => {
    // If somebody hits localhost:3000/ping from this machine, we will execute this callback
    // Request object contains detail about incming request, details like query params, body params etc
    // Response object contains details about what response will be sent back to the client
    console.log("Ping received");
    response.json({message: 'PING received'});
}); // 2 arguments , 1-> route as a string, 2-> callback


// 1. Using the app object, bind it to a port u want your server to listen for socket connection
app.listen(PORT, () => {
    // This callback is executed, once we successfully bind out object to the port
    // and start listening to a new connection

    // This callback is useful to do any action post the server is created
    // Example DB connection
    console.log(`Server started at port ${PORT}`);
}); // The listen method takes 2 parameter -> 1. Port number 2. Callback