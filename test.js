let parent=()=>{
    let counter = 0
    return  child=()=>{
        counter++
        console.log("counter is ",counter)
    }
}

let res= parent()
res()
res()
res()

