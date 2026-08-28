let arr = [4, 5, 9, 7, 8, 1, 3]

function oddSum(n){
    let odd=arr[n] %2!==0

    if(n===arr.length-1){
        if(odd){
            return arr[n]
        }else{
            return 0
        }
    }
    if(odd){
        return arr[n]+oddSum(n+1)
    }else{
        return 0 + oddSum(n+1)
    }
}

console.log(oddSum(0))


