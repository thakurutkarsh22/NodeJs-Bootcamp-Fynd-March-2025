

// import ES6 (ecma script) 
// common js - require 

const http = require("node:http");
const server = http.createServer((req,res) => {

});


server.listen(8080, () => {
    console.log("server is listning to port 8080");
})