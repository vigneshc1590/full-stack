
const username = {name:`Vignesh`, age:25, job:`full Stack Developer/ Cybersecurity`}

//console.log(`I am doing ${username.Job}, and my name is ${username.name}`)


const user = {name:"vignesh", age:25}

const one = new Promise((myResolve,myReject)=>{

    
    myResolve(`sorry, ${user.name} login is successfulll`);
    

})

one.then((name)=>{
    console.log(name);
}).catch((name)=>{
    console.log(name);
})

console.log(one.finally ());