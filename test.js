
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

 
var addTwoNumbers = function(l1, l2) {
    let ans =[]
    let ans2 =[]
 
    let start=l1
    while(start){
     ans.push(start.val)
     start=start.next
    }
    let start2=l2
    while(start2){
     ans2.push(start2.val)
     start2=start2.next
    }
    ans.reverse()
    ans2.reverse()
    
     console.log("vl1,val2",ans,ans2)
 };

 addTwoNumbers([2,4,3],[5,6,4])