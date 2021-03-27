const os = require('os')
console.log('Operation system: ' , os.platform())

console.log('architecture processor',os.arch())

console.log('Information about processor: ',os.cpus())

console.log('Free memory :',os.freemem())
console.log('total memmory :',os.totalmem())
console.log('home directory :',os.homedir())
console.log('On : ' , os.uptime())