//file system
const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname,'test'),(err) => {
//     if(err) {
//         throw err
//     }
//     console.log('dir create')
// })

const filePath = path.join(__dirname,'test','text.txt')

// fs.writeFile(filePath,'Hello node',(err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File create ')
// })
// fs.appendFile(filePath,'\nHello again',(err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File create ')
// })

fs.readFile(filePath,"utf-8",(err,content) => {
    if(err) {
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content',data.toString())
})