const {writeFileSync} = require('fs')
// depending on the number can change how big the file can be
for (let i=0; i < 10000;i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}