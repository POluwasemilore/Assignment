var os = require('os');
console.log("OS Name:  " + os.type());
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

const totalMemory = os.totalmem();
const Memory_GB = totalMemory / 1073741824;

console.log(`System memory: ${Memory_GB.toFixed()} GB`);