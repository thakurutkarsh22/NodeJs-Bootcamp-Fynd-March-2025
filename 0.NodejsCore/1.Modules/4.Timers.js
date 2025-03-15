// 1. setTImeout 

/*
console.log("a");
setTimeout(() => {
    console.log("c");
}, 1000)
console.log("b");
*/



// 2. setInterval 

/*
console.log("a");
setInterval(() => {
    console.log("c");
}, 1000)
console.log("b");
*/




// 3. setImmediate

console.log("a");
setImmediate(() => {
   console.log("hello");
});
console.log("b");