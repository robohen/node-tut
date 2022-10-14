const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//to only get the portion of the file should be
const base = path.basename(filePath)
//should just spit out test.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//will bring up the directory and some manipulation after the directory name is implemented here
console.log(absolute);
