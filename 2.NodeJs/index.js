const http = require("node:http");
const PORT = 8086;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/") {
        if(method === "GET") {
            res.write("Welcome to the home page ");
            res.write("Hello utkarsh ");
            res.end("");
        } else {
            res.writeHead(405, {"Content-type": "application/json"});
            res.end(JSON.stringify({message: "405 method not allowed send a get request"}));
        }
    } else if (url === "/abouts") {
        res.end("THis website is created by utkarsh 8802473356 thakurutkarsh2@gmail.com ");
    } else if (url === "/fitness") {
        const fitnessObject = {
            diet: "2kgs",
            height: 170,
            running: 10,
            sleep: true,
            activities: ["running", "cycling", "gym"],
            cultAdddress: {
                houseNumber: "1910",
                street: "hsr layout banglore"
            },
            createDate: new Date().toLocaleDateString(),
            createTime: new Date().toLocaleTimeString()
        }
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(fitnessObject));
    } else if (url === "/users/:username") {
        // const utkarsh = {
        //     name: "utkarsh"
        // }
        // const anil = {
        //     name: "anil"
        // }
// EXPRESS can handle this better.
        // const params = req.




    } else {
        res.writeHead(404, {"Content-type": "application/json"});
        res.end(JSON.stringify({message: "404 not found"}));
    }

    console.log(url, "url");

});


server.listen(PORT, () => {
    console.log("THUMBS UP SERVER IS RUNNING AT PORT ", PORT);
})


