let n=20

for(let i=1;i<n;i++){
    let str=''
    for(let j=0;j<i;j++){
        str+='*'
    }
    for(let k=n-i;k>=0;k--){
        str+='-'

    }
    console.log(str)
}