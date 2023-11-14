
// const fs = require('fs');
// const path = require('path');
// const fspromise =require('fs').promises;

// const fsOps = async () =>{
//      try{
//       const data = await fspromise.readFile(path.join(__dirname,'file','start.txt'),'utf8',)
//       console.log(data,"hello")
//       await fspromise.writeFile(path.join(__dirname,'file','end.txt'),'hello makkalaaa',)
//       console.log("write completed");
//       await fspromise.appendFile(path.join(__dirname,'file','end.txt'),'sing',)
//       console.log("append");
//       await fspromise.rename(path.join(__dirname,'file','end.txt'),path.join(__dirname,'file','dottt.txt'))  
//       console.log("rename dong");
//       await fspromise.unlink(path.join(__dirname,'file','dottt.txt'))  
//       console.log("unlink dong");
//      }catch(err){
//       console.error(err)
//      }
// }
// fsOps()

// import { readFile } from 'node:fs';

// fs.readFile(path.join(__dirname,'file','start.txt'),'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(path.join(__dirname,'file','end.txt'),'hello makkalaaa', (err) => {
//   if (err) throw err;
//   console.log("write completed");
  
//   fs.appendFile(path.join(__dirname,'file','end.txt'),'sing', (err) => {
//     if (err) throw err;
//     console.log("write completedwwwwwweeee");
//   });
//   fs.rename(path.join(__dirname,'file','end.txt'),path.join(__dirname,'file','dot.txt'), (err) => {
//     if (err) throw err;
//     console.log("ding dong");
//   });
// });



// //exict an uncaught error
// process.on('uncaughtException',err=>{
//     console.error(`there is uncaugh error: ${err}`)
//     process.exit(1)
// })

const http = require('http')
const PORT = 5000;
const fs = require('fs')

const server = http.createServer((req,res)=> {
     // res.write("hi seerverrr")
     //  res.end( )
     res.writeHead(200,{'content-type':'text/html'})
     fs.readFile('index.html',(error,data)=>{
          if(error){
               res.writeHead(404)
               res.write('page not found')
          }else{
                res.write(data)
          }
          res.end();
     })

})

server.listen(PORT,(error)=>{
     if(error){
           console.log(error)
     }else{
          console.log("server connected"+PORT);
     }
})

