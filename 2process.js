const process = require('process')

// console.log(process.versions)
// console.log(process.env.USER)
// val1=10 val2=20 node file.js
// console.log(process.env.val1)

// streams on process object - these control the communication channel between node process and os exec environment
// stdin stdout stderr

process.stdin.setEncoding('utf-8')
console.log('type something and press enter')

process.stdin.on('data',(data)=>{   // this is async
    console.log('you typed :',data.trim());
    if(data.trim()=='exit'){
        process.exit(0);
    }
})

