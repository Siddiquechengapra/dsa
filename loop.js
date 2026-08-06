let n= 20
for (let i = 1; i < n; i++) {
    let str = ''
    for (let k = 0; k <= n-i; k++) {
        str += '-'
    }
    for (let k = 0; k < i-1; k++) {
        str += '*'
    }
    for (let k = 0; k < i; k++) {
        str += '*'
    }
    for (let k = 0; k < n-i+1; k++) {
        str += '-'
    }
    console.log(str)
}
for (let i = 0; i < n; i++) {
    let str = ''
    for (let k = 0; k < i+1; k++) {
        str += '-'
    }
    for(let j=i+1;j<n;j++){
        str+='*'
    }
    for(let j=i;j<n;j++){
        str+='*'
    }
    for (let k = 0; k < i+1; k++) {
        str += '-'
    }
    console.log(str)
}
