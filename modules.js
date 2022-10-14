// Modules - Encapsulated code (share only the minimum)

//always set your modules up with a . or whereever it is in the directory
const names = require('./names');
const sayHi = require('./utils');
const dataExample = require('./alternative-method')
//this runs even though we did not assign a variable to it because the function is invoked and executed on the file at the end
require('./mind-grenade')

sayHi('susan')
//for these you can dig depper or destructure the item you want to reach
sayHi(names.john)
sayHi(names.peter)