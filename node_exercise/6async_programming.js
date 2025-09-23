// create a scenario to fetch data using callbacks


function fetchData(callback){
    setTimeout(()=>{
        callback("data received via callback based");
    },4000);
}

fetchData((mssg)=>console.log(mssg))


