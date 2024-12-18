let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
    setTimeout(() => {
        reject()
    }, 4000)
})

console.log("promise started")
console.log(prom1)

prom1.then(()=>{
    console.log("1st resolve 1.1")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1.1 resolved")
        },2000)
        reject("1.1 rejected")
    })
}).then(val=>{
    console.log(val)
}).catch((val)=>{
    console.log(val)
})

prom1.then(()=>{
    console.log("1st resolve 1.2")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1.2 resolved")
        },10000)
    })
}).then(val=>{
    console.log(val)
})

