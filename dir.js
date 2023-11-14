const fs = require('fs');

if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if (err) throw err
        console.log("director create-d")
     })
}

//exict an uncaught error
process.on('uncaughtException',err=>{
    console.error(`there is uncaugh error: ${err}`)
    process.exit(1)
})