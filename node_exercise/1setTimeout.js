// print the message hello world after every second but only 5 times

let counter = 0;
let intervalid=setInterval(()=>{
    console.log('Hello world ',counter,' time');
    counter++;
    if(counter===5){
        clearInterval(intervalid)
    }
},1000)
