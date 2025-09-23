// create a scenario to fetch data using callbacks


function fetchData(callback){
    setTimeout(()=>{
        callback("data received via callback based");
    },4000);
}

fetchData((mssg)=>console.log(mssg))



// create a scenario to fetch data using promises
function fetchDataUsingPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("data received via promise"),1000)
    })
}

fetchDataUsingPromise().then(
    mssg => {
        console.log(mssg)
    }
)
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("request finished")
    })
