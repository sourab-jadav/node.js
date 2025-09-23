// parse json safely and handle errors

function safeParse(jsonStr){
    try{
        return JSON.parse(jsonStr);
    }catch(err){
        return { error: "invalid jsong"}
    }
}

console.log('{"name":"node"}') // {name:'Node'}
console.log('somestring')
