var http = require('http')
var fs = require('fs')

http 
.createServer(function (req, res){
    //const text = fs.readFileSync('./content.big.txt', 'utf8')
    //res.end(text)
    const  fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', ()=> {
        //pipe pushing from read into the write stream
        fileStream.pipe()
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
})
.listen(8080)