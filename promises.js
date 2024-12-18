let prom1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve()
    },3000)
    setTimeout(()=>{
        reject()
            },4000)
})

console.log("promise started")
console.log(prom1)

prom1.then(()=>{
    console.log("prom1 resolved succesfully")
    return new Promise((resolve,reject )=>{
        setTimeout(()=>{
            resolve()
        },5000)
        setTimeout(()=>{
reject()
        },1000)
    })
}).then(()=>{
    console.log("prom2 resolved successfully")
}).catch(()=>{
    console.log("prom1 rejected")
})
