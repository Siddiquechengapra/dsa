let numsarr = [0, 1, 2, 2, 3, 0, 4, 2]
let rem = 2
let x = 0
for (let i = 0; i < arr.length-1 ; i++) {
    if (arr[i] !== rem) {
        arr[x] = arr[i]

        x++
    } 
}

console.log(x)