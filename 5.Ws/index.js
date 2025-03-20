// HOW A NORMAL HTTP COMMUNICATION HAPPEN : https://www.geeksforgeeks.org/tcp-3-way-handshake-process/


const http = require("node:http");
const PORT = 8999;
const WebsocketServer = require("websocket").server;
const cors = require("cors")

// this is RAW HTTP SERVER 
const httpServer = http.createServer((req, res) => {});

const websocket = new WebsocketServer({httpServer: httpServer}); //  WS (Server) 



httpServer.listen(PORT, () => {
    console.log("THUMBS UP SERVER IS RUNNING AT PORT ", PORT);
})

const connections = [] // it will store all the client connection in the server


// we in here are listning to a new CLient Request.
websocket.on("request", (req) => {
    const connection = req.accept(null, req.origin); // pipeline
    
    // listning for the messages on the connection 
    connection.on("message", (message) => {
        connections.forEach(conn => {
            conn.send(`${connection.socket.remotePort} : ${message.utf8Data}`)
        })
    } );

    // tell the existing connections someone is here.
    connections.forEach(conn => {
        conn.send(`USer ${connection.socket.remotePort} is connected`)
    })

    // save the connection .... 
    connections.push(connection);

    console.log(connections.length)

});


