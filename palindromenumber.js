let num =1234567654321
const copy=num
let rev=0

while(num>0){
    let last= num%10
    rev= (rev*10) +last
    num = Math.floor(num/10)

}
console.log("is palindrome ? "+ (rev === copy))
console.log("reverse of "+ copy +" is "+rev)