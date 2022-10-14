//synchronous and asynchronous exist
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second) this brings up whatever is written on the text

writeFileSync('./content/result-sync.txt', `'Here is the result: ${first}${second}`, 
//appends the files
{flag: 'a'})