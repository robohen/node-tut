//this is so node knows os is the default 
const os = require('os')

//info about current user
const user = os.userInfo()

//console.log(user) will give you the information about the os when called

//method returns the system uptime in seconds 
console.log(`The System Uptime vois ${os.uptime()} seconds`)

const CurrentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

//console.log(currentOS); calling this built in module can show you stats about your os