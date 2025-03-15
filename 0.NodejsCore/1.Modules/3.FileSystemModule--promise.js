const fsPromise = require("node:fs").promises;

// Promise version of File system is little bit slow


fsPromise.readFile("../0.FileSystemDump/filezzz.txt")
.then(data => {
    console.log(data) // BUFFER 
    console.log(data.toString());
})
.catch(error => {
    console.log(error)
})

