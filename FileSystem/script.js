const fs = require('fs');

// fs.writeFile('ali.txt','sfdshef',function(err){
//     if (err) console.log("err");
//     else console.log("done");
// })


// fs.appendFile('ali.txt','next add file',function(err){
//     if (err) console.log("err");
//     else console.log("done");
// })


// fs.rename('hey.text','hey.txt',function(err){
//     if (err) console.log("err");
//     else console.log("done");
// })


// fs.copyFile('hey.txt','./copy/copy.txt',function(err){
//     if (err) console.log("err");
//     else console.log("done");
// })


fs.unlink("hey.txt",function(err){
    if (err)console.error("err");
    else console.log("remave");
})