//synchronous and asynchronous exist
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err,result) =>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt' , 'utf8', (err, result) =>{
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-sync.txt', 
                        //access is allowed because the scope is within this function
                    `'Here is the result: ${first}${second}`, (err, result) =>{
                    if (err){
                        console.log(err)
                        return;
                    }
                    console.log(result)
                    })
    })
})