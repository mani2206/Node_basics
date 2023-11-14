const {format} = require('date-fns');

const {v4:uuid} = require('uuid')
const fspromise = require('fs').promises;
const path = require('path');
const fs = require('fs')
// const { appendFile } = require('fs');

const logeEvent =async (message) => {
    const datetime = `${format(new Date(),'dd/m/yy')}`
    const longIten = `${datetime}\t${uuid()}\t${message}`
    console.log(longIten)
    try{
        const logDir = path.join(__dirname, 'log');
        const logFilePath = path.join(logDir, 'eventFile.txt');
        if(!fs.existsSync(logDir)){
            await fspromise.mkdir(logDir,'log')
        }
        // if (!fs.existsSync(path.join(__dirname,'log'))) {
        //     await fspromise.writeFile(path.join(__dirname),'log','eventFile.txt');
        // }
        await fspromise.appendFile(logFilePath,longIten)
    }catch(err){
       console.error(err)
    }
}

module.exports = logeEvent;