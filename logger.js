const fs = require('fs');

let dir = fs.readdir('./', (err,files) =>{
    if(err){
        console.log(error);   
    }else{
        console.log('files sorted in descending order ' + files.reverse());    
    }
});

//let rootDir = fs.readdirSync('./');

readpath = (msg) =>{
     console.log(msg)
}

module.exports.readpath = readpath;
module.exports.dir = dir;
//module.exports.rootDir = rootDir;