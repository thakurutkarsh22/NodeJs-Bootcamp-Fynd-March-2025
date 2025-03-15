const os = require("node:os");

const userInfo = os.userInfo();
console.log(userInfo);

const nameOs = os.type();
console.log(nameOs);


const numberOfCpu = os.cpus();
console.log(numberOfCpu);

const totalMemory = os.totalmem();
console.log(totalMemory);

