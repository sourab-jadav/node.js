//this file is going to return a function 
//and we will use this function to encapsulate all of the details around speakerservice 
//and only return that just the methods that we need 

const axios=require('axios');
function speakerService(){
    function getSpeakerById(id){//since it is making call to 3rd party api which is asynchronous
        //we need to handle with promise 
        return new Promise((resolve,reject)=>{
            //to make a call we need axios
            axios.get('http://localhost:3000/speakers/'+id)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })

    }

    //we are using something called revealing module pattern 
    //that means our speakerService is going to have bunch of functions
    //we are writing just one for example and it is going to return a obj with 
    //thos methods on it
    return {getSpeakerById}
}

module.exports=speakerService();//this returns just an object   


//now go to sessions router and pull in this service 
