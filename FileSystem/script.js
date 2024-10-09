const fs = require('fs');

fs.writeFile('ali.txt','sfdshef',function(err){
    if (err) console.log("err");
    else console.log("done");
})