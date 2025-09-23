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


// simulate fetch using async await

// If you declare it async, it automatically returns a Promise.
// fetchData defined as async
async function fetchData() {
  return { id: 1, name: "Alice" }; // automatically wrapped in a Promise
}

// fetchData defined with Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" }); // success
      // reject("Error fetching data"); // if you want to simulate failure
    }, 1000); // simulate network delay
  });
}


// Using async/await
async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
